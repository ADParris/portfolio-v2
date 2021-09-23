import React from 'react';

import { Layout } from '@components/Layout';
import {
	AboutSection,
	ContactSection,
	ExperienceSection,
	HeroSection,
	WorkSection,
} from '@components/sections';

const HomePage: React.FC = () => (
	<Layout>
		<HeroSection />
		<AboutSection />
		<ExperienceSection />
		<WorkSection />
		<ContactSection />
	</Layout>
);

export default HomePage;
