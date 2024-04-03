/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module '@podverse/podcast-feed-parser' {
	export type PodcastData = {
		meta: {
			title: string
			description: string
			subtitle: string
			imageURL: string
			lastUpdated: string
			link: string
			language: string
			editor: string
			author: string
			summary: string
			categories: string[]
			owner: {
				name: string
				email: string
			}
			explicit: boolean
			complete: boolean
			blocked: boolean
		}
		episodes: [
			{
				title: string
				description: string
				imageURL: string
				pubDate: string
				link: string
				language: string
				enclosure: {
					length: string
					type: string
					url: string
				}
				duration: number
				summary: string
				blocked: boolean
				explicit: boolean
				order: number
			}
		]
	}

	export function getPodcastFromFeed(feed: string): Promise<PodcastData>
}
