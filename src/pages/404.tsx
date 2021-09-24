import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

const NotFoundPage: React.FC = () => (
	<Flex>
		<Text as="h1">404</Text>
		<Text as="h2">Page Not Found</Text>
	</Flex>
);

export default NotFoundPage;
