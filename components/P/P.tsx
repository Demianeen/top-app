import styles from './P.module.css';
import { PProps } from './P.props';

import cn from 'classnames';

export const P = ({
	size = 'm',
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.little]: size == 's',
				[styles.medium]: size == 'm',
				[styles.big]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
