import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

import cn from 'classnames';

export const Tag = ({
	size = 'little',
	children,
	color = 'ghost',
	href,
	className,
	...props
}: TagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.tag, className, {
				[styles.little]: size == 'little',
				[styles.medium]: size == 'medium',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.grey]: color == 'grey',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{href ? <a>{children}</a> : <>{children}</>}
		</p>
	);
};
