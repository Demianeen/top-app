import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

import cn from 'classnames';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	const scale = useMotionValue(1);

	useEffect(() => {
		console.log(scale);
	}, [scale]);

	return (
		<motion.button
			whileHover={{scale: 1.05}}
			transition={{duration: 0.2}}
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			style={{scale}}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ArrowIcon />
			</span>}
		</motion.button>
	);
};
