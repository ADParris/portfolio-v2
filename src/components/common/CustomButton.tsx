import {
	Button,
	ButtonProps,
	Link,
	LinkProps,
	Text,
} from '@chakra-ui/react';
import React from 'react';

export const CustomButton: React.FC<ButtonProps & LinkProps> = ({
	as,
	children,
	...linkProps
}) => {
	const isLink = as === 'link';

	const hoverStyles = isLink
		? { color: 'var(--colors-highlight-100)' }
		: { bgColor: 'rgba(75, 255, 212, 0.1)' };

	return (
		<Button
			_hover={hoverStyles}
			as={Link}
			borderColor="var(--colors-highlight-300)"
			h="clamp(46px, 7vw, 62px)"
			py={isLink ? 0 : 5}
			transition="background-color 0.3s ease-in"
			{...linkProps}
			variant={isLink ? 'link' : 'outline'}
			w="auto"
		>
			<Text
				color="var(--colors-highlight-300)"
				fontFamily="Gruppo"
				fontSize={isLink ? 'inherit' : 'clamp(16px, 4vw, 32px)'}
			>
				{children}
			</Text>
		</Button>
	);
};
