<script setup lang="ts">
import icons from './icons'

defineOptions({
	inheritAttrs: false
})

const iconsMap = icons as Record<string, string>

const props = defineProps({
	name: {
		type: String,
		required: true
	},
	size: {
		type: String,
		default: '24'
	}
})

const path = computed(() => {
	const svg = iconsMap[props.name]
	if (!svg) return ''

	return svg
		.replace(/width="[^"]*"/, `width="${props.size}"`)
		.replace(/height="[^"]*"/, `height="${props.size}"`)
})
</script>

<template>
	<span class="icon" v-bind="$attrs" v-html="path"></span>
</template>
