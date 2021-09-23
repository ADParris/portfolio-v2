import { ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';

import { theme } from '@data/theme';

import { BackgroundParticles } from '../BackgroundParticles';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

interface IComponentProps {}

export const Layout: React.FC<IComponentProps> = ({ children }) => {
	return (
		<ChakraProvider theme={theme}>
			<BackgroundParticles />
			<Flex flex={1} flexDir="column">
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Flex>
		</ChakraProvider>
	);
};
