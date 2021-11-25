import { GetStaticProps } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios, { AxiosResponse } from 'axios';
import { MenuItem, PageItem } from '../interfaces/menu.interface';
import { Search } from '../layout/Search/Search';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">Title</Htag>
			<Button appearance="primary" arrow="right" onClick={() => Search()}>
				Search
			</Button>
			<Button appearance="ghost" arrow="down">
				Button
			</Button>
			<P size="big">Big</P>
			<P size="medium">Medium</P>
			<P size="little">Little</P>
			<Tag size="little" color="red">
				Little
			</Tag>
			<Tag size="medium" color="green">
				Little
			</Tag>
			<Tag size="little" color="primary">
				Little
			</Tag>
			<Tag size="medium">Little</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data }: AxiosResponse<MenuItem[]> = await axios.post(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	);
	return {
		props: {
			menu: data,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
