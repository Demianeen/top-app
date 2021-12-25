import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import {
	TopLevelCategory,
	TopPageModel,
} from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
	return (
		<TopPageComponent
			firstCategory={firstCategory}
			page={page}
			products={products}
		/>
	);
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	for (const m of firstLevelMenu) {
		const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{
				firstCategory: m.id,
			}
		);
		paths = paths.concat(
			menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
		);
	}
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const firstCategoryItem = firstLevelMenu.find(
		(m) => m.route == params.type
	);
	if (!firstCategoryItem) {
		return {
			notFound: true,
		};
	}

	try {
		const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{
				firstCategory: firstCategoryItem.id,
			}
		);
		if (menu.length == 0) {
			return {
				notFound: true,
			};
		}
		const { data: page }: AxiosResponse<TopPageModel> = await axios.get(
			process.env.NEXT_PUBLIC_DOMAIN +
			'/api/top-page/byAlias/' +
			params.alias
		);
		const { data: products }: AxiosResponse<ProductModel[]> =
			await axios.post(
				process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
				{
					category: page.category,
					limit: 10,
				}
			);

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products,
			},
		};
	} catch {
		return {
			notFound: true,
		};
	}
};

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
