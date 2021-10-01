import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">Title</Htag>
			<Button appearance="primary" arrow="right">
				Button
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
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>m._id.secondCategory</li>
				))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.T_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	}
	);post<MenuItem[]>(
		process.env.NEX
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
