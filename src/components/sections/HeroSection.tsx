import { Flex, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Typed from 'react-typed';

import { ImageDisplay } from '../displays';
import { SectionContainer } from './SectionContainer';

export const HeroSection: React.FC = () => {
	const {
		site: {
			data: {
				author: { name },
			},
		},
		imageSharp,
	} = useStaticQuery(query);

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
					<Flex justifyContent="center" mb={4} w="50%">
						<ImageDisplay alt={name} border round src={imageSharp} />
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
		site {
			data: siteMetadata {
				author {
					name
				}
			}
		}
		imageSharp {
			gatsbyImageData
		}
	}
`;
