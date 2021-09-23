import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

interface IComponentProps {}

export const Footer: React.FC<IComponentProps> = () => {
	return (
		<Flex
			alignItems="flex-end"
			as="footer"
			bgColor="gray.100"
			clipPath="polygon(0 3vw, 100% 0, 100% 100%, 0% 100%)"
			h="4rem"
		>
			<Flex
				alignItems="center"
				flex={1}
				h="2rem"
				justifyContent="center"
				lineHeight={1}
				mx="1rem"
			>
				<Text
					fontFamily="Gruppo"
					fontSize="clamp(16px, 3vw, 20px)"
					fontWeight="bold"
				>
					Footer
				</Text>
			</Flex>
		</Flex>
	);
};
