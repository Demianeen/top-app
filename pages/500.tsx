import { useState } from 'react';
import { Htag } from '../components/Htag/Htag';
import { withLayout } from '../layout/Layout';

function Error500(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag="h1">Ошибка 500</Htag>
		</>
	);
}

export default withLayout(Error500);