import styles from './Review.module.css';
import { ReviewProps } from './Review.props';
import cn from 'classnames';

export const Review = ({
	review,
	className,
	...props
}: ReviewProps): JSX.Element => {
	return (
		<div className={cn(styles.review, className)} {...props}>

		</div>
	);
};
