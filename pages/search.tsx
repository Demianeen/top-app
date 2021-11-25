import React from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';

function Search(): JSX.Element {
	return <>Search</>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post(
		process.env.NEXT_PUBLIC_DOMAIN + '/search',
		{
			firstCategory,
		}
	);

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

withLayout(Search);

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
