import { GetStaticProps } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios, { AxiosResponse } from 'axios';
import { MenuItem, PageItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">Title</Htag>
			<Button appearance="ghost" arrow="down">
				Button
			</Button>
			<P size="l">Big</P>
			<P size="m">Medium</P>
			<P size="s">Little</P>
			<Tag size="l" color="red">
				Little
			</Tag>
			<Tag size="m" color="green">
				Little
			</Tag>
			<Tag size="l" color="primary">
				Little
			</Tag>
			<Tag size="m">Little</Tag>
			<Rating rating={rating} isEditable setRating={setRating}></Rating>
			<Input placeholder="test" />
			<Textarea placeholder="test" />
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
