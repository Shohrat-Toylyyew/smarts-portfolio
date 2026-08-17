<script lang="ts" setup>
import type { ContactItem, LanguageItem } from '~/types/profile'
import Icon from '~/UI/Icon/Icon.vue'
import Title from '~/UI/Title.vue'

const { contacts, languages } = defineProps<{
	contacts: ContactItem[]
	languages: LanguageItem[]
}>()

const mainContacts = computed(() => {
	return contacts.filter(contact => !contact.icon)
})
const secondaryContacts = computed(() => {
	return contacts.filter(contact => contact.icon)
})
</script>

<template>
	<!-- Responsive layout container -->
	<div
		class="grid grid-cols-2 tablet:grid-cols-1 bg-gradient-to-r tablet:bg-gradient-to-b from-gray-500 to-gray-100 w-full"
	>
		<!-- Languages Section -->
		<div
			class="flex flex-col tablet:items-center gap-10 mobile:gap-6 bg-transparent px-4 tablet:px-10 py-[70px] mobile:py-10 tablet:py-12 pl-[140px] w-full h-max"
		>
			<Title text="Languages" text-color="white" />
			<div
				class="flex flex-col gap-4 w-full tablet:max-w-sm max-w-md text-white mobile:text-base text-lg"
			>
				<div class="flex items-center" v-for="(language, index) in languages" :key="index">
					<div class="flex-1 font-semibold">{{ language.name }}</div>
					<div class="flex flex-[3] mobile:flex-[2] justify-end items-center gap-3">
						<div class="bg-gray-600 rounded-full w-[150px] mobile:w-[120px] h-[10px] overflow-hidden">
							<span
								class="block bg-white h-full transition-all duration-500"
								:style="{ width: language.percentage + '%' }"
							></span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Contacts Section -->
		<div
			class="flex flex-col tablet:items-center gap-10 mobile:gap-6 bg-transparent px-4 tablet:px-10 py-[70px] mobile:py-10 tablet:py-12 pl-[100px] w-full h-full"
		>
			<Title text="Contacts" />
			<div class="flex flex-col gap-4 w-full tablet:max-w-sm max-w-md">
				<div v-for="(main, index) in mainContacts" :key="index" class="flex mobile:text-base text-lg">
					<div class="flex-1 font-semibold text-gray-800">{{ main.platform }}</div>
					<component
						:is="main.url ? 'a' : 'div'"
						:href="main.url || undefined"
						target="_blank"
						rel="noopener noreferrer"
						:class="main.url ? 'cursor-pointer hover:underline text-blue-800' : 'text-gray-700'"
						class="flex-[3] mobile:flex-[2] pl-2 text-left break-all"
					>
						{{ main.value }}
					</component>
				</div>

				<!-- Social Icons Centering on Mobile/Tablet -->
				<div class="flex flex-wrap tablet:justify-center gap-5 mt-2">
					<div v-for="(secondary, index) in secondaryContacts" :key="index">
						<a
							:href="secondary.url"
							target="_blank"
							rel="noopener noreferrer"
							class="block text-gray-700 hover:text-black transition-colors"
						>
							<Icon size="30" :name="`${secondary.icon}`" class="cursor-pointer" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
