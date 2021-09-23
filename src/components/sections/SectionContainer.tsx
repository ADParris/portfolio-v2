import { Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {
	id: number;
	minH: string;
	tag: string;
	title?: string;
}

export const SectionContainer: React.FC<IComponentProps> = ({
	children,
	id,
	minH,
	tag,
	title,
}) => {
	const { colorMode } = useColorMode();
	const isOdd = id % 2 !== 0;
	const isDarkMode = colorMode === 'dark';
	const currentBgColor = isOdd
		? isDarkMode
			? 'gray.800'
			: 'gray.100'
		: 'transparent';

	const currentColor = isOdd && !isDarkMode ? 'gray.800' : 'gray.100';

	const beforeLineColor =
		isDarkMode || isOdd ? 'gray.800' : 'gray.100';

	const beforeLine = {
		bgColor: beforeLineColor,
		content: `''`,
		display: `block`,
		h: '1px',
		mr: '20px',
		position: `relative`,
		w: `full`,
	};

	const beforeNumber = {
		color: 'var(--colors-highlight-dark)',
		content: `'0${id}.'`,
		display: `block`,
		fontFamily: `Gruppo`,
		fontSize: `0.85em`,
		mb: '1.5px',
		mr: '0.25rem',
		position: `relative`,
	};

	return (
		<Flex
			as="section"
			bgColor={currentBgColor}
			color={currentColor}
			clipPath={
				isOdd
					? 'polygon(0 3vw, 100% 0, 100% calc(100% - 3vw), 0% 100%)'
					: undefined
			}
			flex={1}
			flexDir="column"
			h="full"
			minH={minH}
			px="1rem"
			position="relative"
		>
			{title && (
				<Flex
					_before={beforeLine}
					alignItems="center"
					mt={isOdd ? '3vw' : 0}
				>
					<Text
						_before={beforeNumber}
						alignItems="flex-end"
						as="h3"
						display="inline-flex"
						fontFamily="Gruppo"
						whiteSpace="nowrap"
					>
						{title}
					</Text>
				</Flex>
			)}
			{children}
		</Flex>
	);
};
