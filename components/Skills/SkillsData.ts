import { StaticImageData } from 'next/image'

//  Framer, Cypress icons from freeicons.io
import framer from '../../public/skillsIcons/framer.webp'
import cypress from '../../public/skillsIcons/cypress.webp'

// HTML5 CSS3, JavaScript, TypeScript, React.js, TailwindCSS, MySQL, Git, Node, Docker, PHP, MongoDB, Figma, Next.js, Jest, D3.js, CommandLine, Netlify, Firebase, Audio, Angular, GraphQL, Svelte, Spring Boot icons from icons8.com
import html from '../../public/skillsIcons/html.webp'
import css from '../../public/skillsIcons/css.webp'
import js from '../../public/skillsIcons/js.webp'
import ts from '../../public/skillsIcons/ts.webp'
import react from '../../public/skillsIcons/react.webp'
import tailwind from '../../public/skillsIcons/tailwind.webp'
import mysql from '../../public/skillsIcons/mysql.webp'
import git from '../../public/skillsIcons/git.webp'
import node from '../../public/skillsIcons/node.webp'
import docker from '../../public/skillsIcons/docker.webp'
import php from '../../public/skillsIcons/php.webp'
import mongo from '../../public/skillsIcons/mongo.webp'
import figma from '../../public/skillsIcons/figma.webp'
import nextjs from '../../public/skillsIcons/nextjs.webp'
import jest from '../../public/skillsIcons/jest.webp'
import d3 from '../../public/skillsIcons/d3.webp'
import commandLine from '../../public/skillsIcons/commandLine.webp'
import netlify from '../../public/skillsIcons/netlify.webp'
import railway from '../../public/skillsIcons/railway.webp'
import firebase from '../../public/skillsIcons/firebase.webp'
import audio from '../../public/skillsIcons/audio.webp'
import angular from '../../public/skillsIcons/angular.webp'
import graphql from '../../public/skillsIcons/graphql.webp'
import svelte from '../../public/skillsIcons/svelte.webp'
import sb from '../../public/skillsIcons/spring-boot.webp'

//  Express icon from https://icon-icons.com/download/169185/PNG/128/
import express from '../../public/skillsIcons/express.webp'

//  Three.js icon from Mstrdoob, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons
import threejs from '../../public/skillsIcons/threejs.webp'

//  React Query icon from https://seeklogo.com/vector-logo/435661/react-query
import reactQuery from '../../public/skillsIcons/reactQuery.webp'

// Astro.js icon from https://seeklogo.com/vector-logo/428045/astro
import astro from '../../public/skillsIcons/astro.webp'

export interface SkillInterface {
	src: StaticImageData
	text: string
}

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
		src: commandLine,
		text: 'Command Line',
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

export const mediumSkillsData: SkillInterface[] = [
	{
		src: node,
		text: 'Node.js',
	},
	{
		src: express,
		text: 'Express.js',
	},
	{
		src: mongo,
		text: 'MongoDB',
	},
	{
		src: docker,
		text: 'Docker',
	},
	{
		src: php,
		text: '',
	},
	{
		src: nextjs,
		text: 'Next.js',
	},
	{
		src: figma,
		text: 'Figma',
	},
	{
		src: cypress,
		text: 'Cypress',
	},
	{
		src: jest,
		text: 'Jest',
	},
	{
		src: d3,
		text: 'D3.js',
	},
	{
		src: firebase,
		text: 'Firebase',
	},
	{
		src: netlify,
		text: 'Netlify',
	},
	{
		src: railway,
		text: 'Railway',
	},
	{
		src: angular,
		text: 'Angular',
	},
	{
		src: sb,
		text: 'Spring Boot',
	},
	{
		src: audio,
		text: 'Web Audio API',
	},
	{
		src: svelte,
		text: 'Svelte',
	},
]

export const futureSkillsData: SkillInterface[] = [
	{
		src: graphql,
		text: 'GraphQL',
	},
	{
		src: astro,
		text: '',
	},
	{
		src: reactQuery,
		text: 'React Query',
	},
	{
		src: threejs,
		text: 'Three.js',
	},
]
