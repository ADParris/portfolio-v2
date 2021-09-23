import { extendTheme } from '@chakra-ui/react';
import { default as defaultTheme } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: `0 0 0 0.1rem rgb(255 255 255 / 90%)`,
				},
			},
			variants: {
				ghost: (props: any) => ({
					...defaultTheme.components.Button.variants.ghost(props),
					_hover: {
						bg: 'whiteAlpha.200',
					},
				}),
				outline: (props: any) => ({
					...defaultTheme.components.Button.variants.outline(props),
					_hover: {
						bg: 'whiteAlpha.200',
					},
				}),
			},
		},
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: 'none',
				},
				_hover: {
					textDecoration: `none`,
				},
			},
		},
		Text: {
			baseStyle: {
				fontWeight: 'light',
				letterSpacing: 'wide',
			},
		},
	},
	styles: {
		global: (props: any) => ({
			':root': {
				'--defaultFontSize': '100%',
				'--colors-highlight-50': '#7EFFE0',
				'--colors-highlight-100': '#4BFFD4',
				'--colors-highlight-200': '#18FFC8',
				'--colors-highlight-300': '#4FD1C5',
				'--colors-highlight-500': '#319795',
				'--colors-highlight-700': '#285E61',
				'--header-height': '4rem',
				'--header-menu-full': 'none',
				'--header-menu-icon': 'flex',
				'--swiper-navigation-size': '1.25rem',
				'--swiper-theme-color': '#285E61',
			},
			h1: {
				fontSize: '2em',
				fontWeight: 'bold !important',
			},
			h2: {
				fontSize: '1.5em',
				fontWeight: 'bold !important',
			},
			h3: {
				fontSize: '1.17em',
				fontWeight: 'bold !important',
			},
			h4: {
				fontWeight: 'bold !important',
			},
			'.hero-subTitle': {
				fontSize: '1.17em',
			},
			'.mySwiper-dark': {
				'.swiper-button-next, .swiper-button-prev': {
					color: '#285E61',
				},
				'.swiper-pagination-bullet-active': {
					background: '#285E61',
				},
			},
			'.mySwiper-light': {
				'.swiper-button-next, .swiper-button-prev': {
					color: '#319795',
				},
				'.swiper-pagination-bullet-active': {
					background: '#319795',
				},
			},
			'.swiper': {
				height: 'fit-content',
				pt: '6vw',
				width: 'clamp(280px, 90vw, 800px)',
			},
			'.swiper-horizontal > .swiper-pagination-bullets': {
				bottom: 'unset',
				py: '1vw',
				top: 0,
				zIndex: 'unset',
			},
			'.swiper-button-next, .swiper-button-prev': {
				top: '3vw',
			},
			'@media only screen and (min-width: 340px)': {
				'.hero-subTitle': {
					fontSize: '1.5em',
				},
			},
			'@media only screen and (min-width: 480px)': {},
			'@media only screen and (min-width: 640px)': {
				':root': {
					'--defaultFontSize': '125%',
					'--swiper-navigation-size': '2rem',
					'--header-menu-full': 'flex',
					'--header-menu-icon': 'none',
				},
			},
			'@media only screen and (min-width: 768px)': {},
			'@media only screen and (min-width: 992px)': {
				':root': {
					'--defaultFontSize': '150%',
				},
			},
			'@media only screen and (min-width: 1024px)': {},
			'@media only screen and (min-width: 1280px)': {},
			body: {
				'&::-webkit-scrollbar': {
					width: '8px',
				},
				'&::-webkit-scrollbar-thumb': {
					bgColor: mode('teal.500', 'teal.400')(props),
					borderRadius: '8px',
				},
				bg: mode('gray.50', 'gray.700')(props),
				color: mode('gray.700', 'gray.50')(props),
				fontFamily: '"Nunito", sans-serif',
				fontSize: 'var(--defaultFontSize)',
			},
			html: {},
		}),
	},
});
