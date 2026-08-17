<script setup lang="ts">
import type { HistorySlideItem } from '~/types/profile'

const { slideData } = defineProps<{
	slideData: HistorySlideItem[]
}>()
</script>

<template>
	<div class="gap-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] w-full">
		<div v-for="(slide, index) in slideData" :key="index" class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<span class="font-bold text-[22px] leading-tight">
					{{ slide.firstTitle }}
				</span>
				<span class="font-bold text-[22px] leading-tight">{{ slide.secondTitle }}</span>
				<span class="mt-1 font-bold text-gray-400 text-xl tracking-wider">{{ slide.timeLine }}</span>
			</div>
			<p class="text-[17px] text-gray-800 leading-relaxed whitespace-pre-line">
				{{ slide.description }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
