import React from 'react';

import { Flex } from '@chakra-ui/react';

interface IComponentProps {}

export const Main: React.FC<IComponentProps> = ({ children }) => {
	return (
		<Flex as="main" flex={1} flexDir="column">
			{children}
		</Flex>
	);
};
