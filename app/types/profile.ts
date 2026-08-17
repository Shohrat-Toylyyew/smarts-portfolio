export interface HistorySlideItem {
	firstTitle: string
	secondTitle: string
	timeLine: string
	description: string
}

export interface HistoryItem {
	slideName: string
	slideData: HistorySlideItem[]
}

export interface SkillCategory {
	category: string
	items: { name: string; icon: string }[]
}

export interface ProjectItem {
	name: string
	mediaFiles: string[]
	url?: string
	description: string
}

export interface ContactItem {
	platform: string
	value: string
	url?: string
	icon?: string
}

export interface LanguageItem {
	name: string
	percentage: number
}

export interface WorkerProfile {
	personal: {
		fullName: string
		role: string
		avatar: string
		heroBg: string
		skillsBg: string
		aboutMe: string
	}
	history: HistoryItem[]
	skills: SkillCategory[]
	projects: ProjectItem[]
	contacts: ContactItem[]
	languages: LanguageItem[]
}
