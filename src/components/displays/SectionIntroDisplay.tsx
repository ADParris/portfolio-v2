import { Flex } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {
	intro: string;
}

export const SectionIntroDisplay: React.FC<IComponentProps> = ({
	intro,
}) => {
	return (
		<Flex my="3vw" w="clamp(300px, 60vw, 900px)">
			<Flex
				bgColor="blackAlpha.200"
				border="1px solid"
				borderRadius={8}
				dangerouslySetInnerHTML={{ __html: intro }}
				p={4}
			/>
		</Flex>
	);
};
