import { Link } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {
	bgIsLight: boolean;
	link: string;
}

export const LinkDisplay: React.FC<IComponentProps> = ({
	bgIsLight,
	children,
	link,
}) => {
	const hoverColor = bgIsLight
		? 'var(--colors-highlight-300)'
		: 'var(--colors-highlight-200)';
	const normalColor = bgIsLight
		? 'var(--colors-highlight-500)'
		: 'var(--colors-highlight-300)';

	return (
		<Link
			_hover={{ color: hoverColor }}
			color={normalColor}
			mr={2}
			p={2}
			href={link}
			rel="noopener noreferrer nofollow"
			target="_blank"
		>
			{children}
		</Link>
	);
};
