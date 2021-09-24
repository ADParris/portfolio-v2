import { Flex, Text, useColorMode } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Footer: React.FC = () => {
	const { colorMode } = useColorMode();
	const {
		site: {
			meta: {
				author: { name },
			},
		},
	} = useStaticQuery(query);

	const isDarkMode = colorMode === 'dark';
	const currentBgColor = isDarkMode ? 'gray.800' : 'gray.100';

	return (
		<Flex
			alignItems="flex-end"
			as="footer"
			bgColor={currentBgColor}
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
					{`Designed & Built by ${name}`}
				</Text>
			</Flex>
		</Flex>
	);
};

const query = graphql`
	{
		site {
			meta: siteMetadata {
				author {
					name
				}
			}
		}
	}
`;
