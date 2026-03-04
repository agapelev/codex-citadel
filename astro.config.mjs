// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// --- ВАЖНЫЕ ДОБАВЛЕНИЯ ДЛЯ GITHUB PAGES ---
	site: 'https://agapelev.github.io',
	base: '/codex-citadel',
	// ------------------------------------------

	integrations: [
		starlight({
			title: 'Codex Citadel', // Назовем его достойно
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/agapelev/codex-citadel' }
			],
			sidebar: [
				{
					label: 'База Знаний',
					items: [
						{ label: 'Введение', slug: 'index' },
						{ label: 'Быстрый старт', slug: 'guides/example' },
					],
				},
				{
					label: 'Фреймворки',
					// Это позволит папкам внутри src/content/docs/frameworks
					// появляться в меню автоматически
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
