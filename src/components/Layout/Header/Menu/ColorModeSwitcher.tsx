import React from 'react';
import {
	Button,
	Flex,
	Icon,
	IconButton,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface IComponentProps {
	handleClose?: () => void;
}

export const ColorModeSwitcher: React.FC<IComponentProps> = ({
	handleClose,
}) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	const handleToggleAndClose = () => {
		toggleColorMode();
		handleClose && handleClose();
	};

	return handleClose ? (
		<Button
			aria-label={`switch to ${text} mode`}
			leftIcon={<Icon as={SwitchIcon} />}
			onClick={handleToggleAndClose}
			m="0.5rem"
			p={0}
			variant="ghost"
		>
			<Text
				fontWeight="normal"
				lineHeight={1}
				textTransform="capitalize"
			>{`${text} mode`}</Text>
		</Button>
	) : (
		<Flex p={2}>
			<IconButton
				aria-label={`switch to ${text} mode`}
				fontSize="md"
				icon={<SwitchIcon />}
				minH={6}
				w={6}
				onClick={toggleColorMode}
				variant="ghost"
			/>
		</Flex>
	);
};
