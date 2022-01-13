import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { withLayout } from '../../layout/Layout';
import { ParsedUrlQuery } from 'node:querystring';
import { API } from '../../helpers/api';

function Type({ firstCategory }: TypeProps): JSX.Element {
	return <>Type: {firstCategory} </>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map((m) => `/${m.route}`),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
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
	const { data }: AxiosResponse<MenuItem[]> = await axios.post(
		API.topPage.find,
		{
			firstCategory: firstCategoryItem.id,
		}
	);
	return {
		props: {
			menu: data,
			firstCategory: firstCategoryItem.id,
		},
	};
};

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
