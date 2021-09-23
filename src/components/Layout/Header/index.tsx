import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

interface IComponentProps {}

export const Header: React.FC<IComponentProps> = () => {
	return (
		<Flex
			alignItems="center"
			as="header"
			h="4rem"
			left={0}
			position="absolute"
			top={0}
			w="full"
			zIndex={1}
		>
			<Flex
				alignItems="center"
				color="gray.100"
				flex={1}
				fontFamily="Gruppo"
				justifyContent="space-between"
				mx="1rem"
			>
				<Text>AP</Text>
				<Text>Header</Text>
			</Flex>
		</Flex>
	);
};
