// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Кодекс «Цитадели Духа»',
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/agapelev/codex-citadel' }
			],
			// Начало Sidebar
			sidebar: [
				{
					label: 'Руководства',
			items: [{ label: 'Руководство по обучению', slug: 'guides/example' }],
				},
				{
					label: 'Справочники',
			autogenerate: { directory: 'reference' },
				},
				{
					label: "Школа",
			items: [
				{
					label: "Том 1",
			items: [
				{ label: "01. Конфликт", autogenerate: { directory: "school/vol.1/01-conflict" } },
			{ label: "02. Школа Христа", autogenerate: { directory: "school/VOL.1/02_school_of_christ" } },
			{ label: "03. Личность Иисуса", autogenerate: { directory: "school/VOL.1/03_person_jesus" } },
			{ label: "04. Всемогущая Кровь", autogenerate: { directory: "school/VOL.1/04_almighty_blood" } },
			{ label: "05. Покаяние", autogenerate: { directory: "school/VOL.1/05-repentanse" } },
			{ label: "06. Крест", autogenerate: { directory: "school/VOL.1/06_croos" } },
			{ label: "07. Вера", autogenerate: { directory: "school/VOL.1/07_faith" } },
			],
				},
			{
				label: "Том 2",
			items: [
				{ label: "08. Молитва", autogenerate: { directory: "school/VOL.2/08.PRAYER" } },
			{ label: "09. Управление", autogenerate: { directory: "school/VOL.2/09.STEWARDSHIP" } },
			{ label: "10. Духовная война", autogenerate: { directory: "school/VOL.2/10. THE_WARFARE" } },
			{ label: "11. Ученичество", autogenerate: { directory: "school/VOL.2/11. DISCIPLESHIP" } },
			{ label: "12. Освящение", autogenerate: { directory: "school/VOL.2/12. SANCTIFICATION" } },
			{ label: "13. Церковь", autogenerate: { directory: "school/VOL.2/13. CHURCH" } },
			{ label: "14. Восстановление врат", autogenerate: { directory: "school/VOL.2/14. REBUILDING_THE_GATES" } },
			{ label: "15. Единство Церкви", autogenerate: { directory: "school/VOL.2/15. UNITY_OF_CHURCH" } },
			],
			},
			{
				label: "Том 3",
			items: [
				{ label: "16. Святой Дух", autogenerate: { directory: "school/VOL.3/16. HOLY_SPIRIT" } },
			{ label: "17. Пробуждение", autogenerate: { directory: "school/VOL.3/17. REVIVAL" } },
			{ label: "18. Пути к силе", autogenerate: { directory: "school/VOL.3/18. PATHS_TO_POWER" } },
			],
			},
			],
				},
				{
					label: "Библиотека",
			items: [
				{
					label: "Аустин Остин-Спаркс",
			items: [
				{ label: "Книги", autogenerate: { directory: "laybrari/austin-sparks/books" } },
			{ label: "Статьи", autogenerate: { directory: "laybrari/austin-sparks/articles" } },
			],
				},
			{
				label: "Берт Кленденнен",
				items: [
					{ label: "Книги", autogenerate: { directory: "laybrari/clendennen/books" } },
					{ label: "Статьи", autogenerate: { directory: "laybrari/clendennen/articles" } },
				],
			},
			{
				label: "Все материалы",
				autogenerate: { directory: "laybrari" }
			}
			]
				}
			], // Конец Sidebar
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
