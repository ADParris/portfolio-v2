import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {
	title: string;
}

export const Title: React.FC<IComponentProps> = ({ title }) => {
	const underlineAfter = {
		bgColor: 'teal.500',
		borderRadius: 2,
		content: '""',
		display: 'block',
		h: 1,
		position: 'relative',
		w: 'full',
	};

	return (
		<Flex>
			<Text
				_after={underlineAfter}
				as="h4"
				fontFamily="Gruppo"
				whiteSpace="nowrap"
			>
				{title}
			</Text>
		</Flex>
	);
};
