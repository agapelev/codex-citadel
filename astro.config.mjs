// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Кодекс «Цитадели Духа»',
			// Вот это — ПРАВИЛЬНЫЙ путь инъекции футера:
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/agapelev/codex-citadel' }],
			sidebar: [
				{
					label: 'Руководства',
			items: [{ label: 'Руководство по обучению', slug: 'guides/example' }],
				},
				{
					label: 'Справочники',
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
