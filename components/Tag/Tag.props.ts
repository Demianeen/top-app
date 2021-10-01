import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'little' | 'medium';
	children: ReactNode;
	clor?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
	href?: string;
}
