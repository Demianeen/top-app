import styles from './P.module.css';
import { PProps } from './P.props';

import cn from 'classnames';

export const P = ({
	size = 'medium',
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.little]: size == 'little',
				[styles.medium]: size == 'medium',
				[styles.big]: size == 'big',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
