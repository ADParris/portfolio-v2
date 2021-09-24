import { Flex, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Typed from 'react-typed';

import { ImageDisplay } from '@components/common';
import { SectionContainer } from './SectionContainer';

export const HeroSection: React.FC = () => {
	const {
		allFile: { nodes },
		site: {
			data: {
				author: { name },
			},
		},
	} = useStaticQuery(query);

	const imageData = nodes[0].childImageSharp;

	const typedText = [
		'FRONT-END DEVELOPER.',
		'BACK-END DEVELOPER.',
		'I HELP MAKE THE WEB.',
	];

	return (
		<SectionContainer id={0} minH="97vh" tag="top">
			<Flex
				alignItems="center"
				flex={1}
				flexDir="column"
				justifyContent="center"
			>
				<Flex
					alignItems="center"
					flexDir="column"
					w="clamp(280px, 90vw, 600px)"
				>
					<Flex
						justifyContent="center"
						mb={4}
						w="clamp(180px, 40vw, 340px)"
					>
						<ImageDisplay alt={name} border round src={imageData} />
					</Flex>
					<Text as="h1">{name}</Text>
					<Text as="h2" className="hero-subTitle" color="gray.400">
						<Typed
							backSpeed={70}
							loop
							strings={typedText}
							typeSpeed={60}
						/>
					</Text>
				</Flex>
			</Flex>
		</SectionContainer>
	);
};

const query = graphql`
	{
		allFile(filter: { name: { eq: "me" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
		site {
			data: siteMetadata {
				author {
					name
				}
			}
		}
	}
`;
