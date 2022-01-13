import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import styles from './Up.module.css';
import UpIcon from './up.svg';

export const Up = (): JSX.Element => {
	const control = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		control.start({ opacity: y / (document.body.scrollHeight / 2) });
	}, [y, control]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div 
			className={styles.up} 
			animate={control}
			initial={{opacity: 0}}
		>
			<ButtonIcon appearance='primary' icon='up' aria-label='Наверх' onClick={scrollToTop} />
		</motion.div>
	);
};
