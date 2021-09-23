import {
	Flex,
	Link,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {
	additional?: string;
	bgIsLight: boolean;
	info: string;
}

export const InfoBox: React.FC<IComponentProps> = ({
	additional,
	bgIsLight,
	info,
}) => {
	const linkStyles = {
		a: {
			_hover: {
				color: bgIsLight
					? 'var(--colors-highlight-500)'
					: 'var(--colors-highlight-50)',
			},
			color: bgIsLight
				? 'var(--colors-highlight-700)'
				: 'var(--colors-highlight-200)',
		},
	};

	return (
		<Flex
			bgColor="blackAlpha.200"
			border="1px solid"
			borderRadius={8}
			maxW="clamp(300px, 96vw, 600px)"
			mx="auto"
			p={4}
		>
			<Flex alignItems="flex-end" flexDir="column">
				<Flex
					__css={linkStyles}
					dangerouslySetInnerHTML={{ __html: info }}
				/>
				{additional && (
					<Popover placement="top-end">
						<PopoverTrigger>
							<Link
								fontFamily="Gruppo"
								fontStyle="italic"
								fontWeight="bold"
							>
								note
							</Link>
						</PopoverTrigger>
						<PopoverContent
							maxW="clamp(300px, 94vw, 600px)"
							mx="auto"
							w="full"
						>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverBody
								dangerouslySetInnerHTML={{ __html: additional }}
								mt={2}
								p={4}
							/>
						</PopoverContent>
					</Popover>
				)}
			</Flex>
		</Flex>
	);
};
