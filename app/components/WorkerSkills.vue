<script lang="ts" setup>
import type { SkillCategory } from '~/types/profile'
import Icon from '~/UI/Icon/Icon.vue'
import Title from '~/UI/Title.vue'

const { skills, bgImage } = defineProps<{
	skills: SkillCategory[]
	bgImage: string
}>()

// Reactively detect screen breakpoints based on the tailwind config (max-width)
const isMobile = useMediaQuery('(max-width: 768px)')
const isTablet = useMediaQuery('(max-width: 992px)')

// Icon sizes: desktop 80px, tablet 60px, mobile 50px
const iconSize = computed(() => {
	if (isMobile.value) return '50'
	if (isTablet.value) return '60'
	return '80'
})
</script>

<template>
	<div
		class="relative bg-cover bg-center bg-fixed w-full"
		:style="{ backgroundImage: `url(${bgImage})` }"
	>
		<div class="absolute inset-0 backdrop-blur-sm"></div>

		<div class="absolute inset-0 bg-black/50"></div>

		<div class="z-10 relative w-full h-full">
			<!-- Responsive Outer Padding & Gaps -->
			<div
				class="flex flex-col gap-20 laptop:gap-14 mobile:gap-8 tablet:gap-10 px-[140px] mobile:px-4 tablet:px-10 py-[100px] mobile:py-12 tablet:py-16"
			>
				<Title text="Skills" color="white" text-color="white" />

				<!-- Main Skills White Card Container -->
				<div
					class="flex flex-col justify-center items-center gap-5 bg-white p-10 mobile:p-4 tablet:p-6 rounded-3xl"
				>
					<div
						v-for="(skill, index) in skills"
						:key="index"
						class="flex flex-col items-center gap-5 border-b-4 w-full"
						:style="{ borderBottom: index === skills.length - 1 ? 'none' : '' }"
					>
						<!-- Responsive Category Text Sizes -->
						<h1
							class="font-bold text-[40px] laptop:text-[34px] mobile:text-[22px] tablet:text-[28px] text-center"
						>
							{{ skill.category }}
						</h1>

						<!-- Responsive Grid Gaps for the Icons -->
						<div
							class="flex flex-wrap justify-center gap-x-20 gap-y-5 mobile:gap-x-6 tablet:gap-x-12 pb-8 mobile:pb-6"
						>
							<div
								v-for="(item, index) in skill.items"
								:key="index"
								class="group relative flex flex-col items-center"
							>
								<!-- Tooltip styling -->
								<span
									class="-top-10 z-20 absolute bg-gray-800 px-2 py-1 rounded font-medium text-white text-xs whitespace-nowrap scale-0 group-hover:scale-100 transition-all pointer-events-none"
								>
									{{ item.name }}
								</span>

								<!-- Responsive Icon Sizing: Scales from 80px -> 60px -> 50px -->
								<Icon
									:size="iconSize"
									:name="item.icon"
									mode="svg"
									class="group-hover:scale-110 transition-transform duration-200 cursor-pointer"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
