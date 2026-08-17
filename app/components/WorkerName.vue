<script lang="ts" setup>
const { name, role, bgImage } = defineProps<{
	name: string
	role: string
	bgImage: string
}>()
</script>

<template>
	<div
		class="relative bg-cover bg-center bg-fixed w-full h-[100dvh]"
		:style="{ backgroundImage: `url(${bgImage})` }"
	>
		<div class="absolute inset-0 backdrop-blur-sm"></div>
		<div class="absolute inset-0 bg-black/50"></div>

		<div
			class="z-10 relative flex flex-col justify-center items-center px-6 w-full h-full text-white"
		>
			<div
				class="font-bold text-[100px] laptop:text-[80px] mobile:text-[44px] mobileSmall:text-[36px] tablet:text-[60px] text-center leading-tight"
			>
				{{ name }}
			</div>

			<div
				class="mt-4 font-semibold text-[35px] text-gray-400 laptop:text-[28px] mobile:text-[16px] mobileSmall:text-[14px] tablet:text-[22px] text-center uppercase tracking-[6.25px] mobile:tracking-[2px] tablet:tracking-[4px]"
			>
				{{ role }}
			</div>
		</div>
	</div>
</template>
