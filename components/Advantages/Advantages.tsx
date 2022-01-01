import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './checkmark.svg';

export const Advantages = ({
	advantages,
}: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div className={styles.advantage} key={a._id}>
					<CheckIcon />
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.line}/>
					<div className={styles.description}>{a.description}</div>
				</div>
			))}
		</>
	);
};
