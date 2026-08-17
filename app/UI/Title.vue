<script setup lang="ts">
const {
	color = 'red',
	textColor = 'black',
	text
} = defineProps<{
	text: string
	color?: 'red' | 'white'
	textColor?: 'black' | 'white'
}>()
</script>

<template>
	<div
		class="inline-block before:bottom-0 before:left-0 before:absolute relative pb-5 mobile:pb-3 before:w-[52px] mobile:before:w-[40px] before:h-[7px] mobile:before:h-[5px] font-bold text-[38px] mobile:text-[22px] tablet:text-[28px] uppercase before:content-[''] tracking-[6.25px] mobile:tracking-[2px] tablet:tracking-[4px]"
		:class="[
			textColor === 'white' ? 'text-white' : 'text-black',
			{ 'before:bg-red-500': color === 'red' },
			{ 'before:bg-white': color === 'white' }
		]"
	>
		{{ text }}
	</div>
</template>

<style scoped></style>
