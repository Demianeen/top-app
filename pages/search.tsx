import React from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { API } from '../helpers/api';

function Search(): JSX.Element {
	return <>Search</>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

export default withLayout(Search);

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
