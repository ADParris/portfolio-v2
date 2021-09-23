import React from 'react';

import {
	Button,
	ButtonProps,
	Link,
	LinkProps,
	Text,
} from '@chakra-ui/react';

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
			py={isLink ? 0 : 7}
			size="lg"
			transition="background-color 0.3s ease-in"
			{...linkProps}
			variant={isLink ? 'link' : 'outline'}
		>
			<Text
				color="var(--colors-highlight-300)"
				fontFamily="Gruppo"
				fontSize={isLink ? 'inherit' : '1.5em'}
				fontWeight="bold"
			>
				{children}
			</Text>
		</Button>
	);
};
