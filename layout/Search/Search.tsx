import styles from './Search.module.css';
import cn from 'classnames';
import SearchIcon from './icons/search.svg';

export const Search = (): JSX.Element => {
	return (
		<>
			<input />
			<div className={styles.searchIconBlock}>
				<SearchIcon></SearchIcon>
			</div>
		</>
	);
};
