import { SkillInterface } from './Skill'

//  Framer icon from freeicons.io
import framer from '../../public/framer.webp'
// HTML5 CSS3, JavaScript, TypeScript, React.js, TailwindCSS, MySQL and Git icons from icons8.com
import html from '../../public/html.webp'
import css from '../../public/css.webp'
import js from '../../public/js.webp'
import ts from '../../public/ts.webp'
import react from '../../public/react.webp'
import tailwind from '../../public/tailwind.webp'
import mysql from '../../public/mysql.webp'
import git from '../../public/git.webp'

export const strongSkillsData: SkillInterface[] = [
	{
		src: html,
		text: 'HTML5',
	},
	{
		src: css,
		text: 'CSS3',
	},
	{
		src: js,
		text: 'JavaScript',
	},
	{
		src: ts,
		text: 'TypeScript',
	},
	{
		src: react,
		text: 'React.js',
	},
	{
		src: git,
		text: 'Git',
	},
	{
		src: mysql,
		text: '',
	},
	{
		src: tailwind,
		text: 'TailwindCSS',
	},
	{
		src: framer,
		text: 'Framer Motion',
	},
]
