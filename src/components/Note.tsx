import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

import Tippy from '@tippyjs/react';
import React from 'react';

interface IComponentProps {
	content: string;
}

export const Note: React.FC<IComponentProps> = ({ content }) => (
	<Tippy
		content={<div className="p-4 text-base">{content}</div>}
		theme="light-border"
	>
		<span className="italic px-4 py-2 text-teal.500">note</span>
	</Tippy>
);
