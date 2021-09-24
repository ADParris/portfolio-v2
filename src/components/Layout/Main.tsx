import { Flex } from '@chakra-ui/react';
import React from 'react';

export const Main: React.FC = ({ children }) => (
	<Flex as="main" flex={1} flexDir="column">
		{children}
	</Flex>
);
