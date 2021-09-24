import { Link, Text } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {
	count: number;
	handleClose?: () => void;
	link: string;
}

export const NavLink: React.FC<IComponentProps> = ({
	count,
	handleClose,
	link,
}) => {
	const after = {
		bgColor: 'var(--colors-highlight-200)',
		bottom: '-0.37em',
		borderRadius: '3px',
		content: '""',
		display: 'block',
		h: '3px',
		position: 'relative',
		transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
		w: 0,
	};

	const before = {
		color: 'var(--colors-highlight-300)',
		content: `'0${count}.'`,
		fontSize: '0.7em',
		fontWeight: 'bold',
		mr: 1,
	};

	const hover = {
		_after: {
			w: 'full',
		},
	};

	return (
		<Link
			_hover={{ color: `inherit` }}
			href={`/#${link}`}
			letterSpacing="tight"
			onClick={handleClose}
			mt={handleClose ? '0.5rem' : 0}
			variant="ghost"
		>
			<Text
				_after={after}
				_before={before}
				_hover={hover}
				aria-label={link}
				fontFamily="Gruppo"
				fontSize="1.1em"
				lineHeight={1}
				mr={2}
				p={2}
				textTransform="capitalize"
			>
				{link}
			</Text>
		</Link>
	);
};
