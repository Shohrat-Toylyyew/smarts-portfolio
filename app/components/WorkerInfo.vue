<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Title from '~/UI/Title.vue'
import History from '~/widgets/History.vue'
import type { HistoryItem } from '~/types/profile'
import Icon from '~/UI/Icon/Icon.vue'

const prevRef = ref<HTMLElement | null>(null)
const nextRef = ref<HTMLElement | null>(null)

const navigation = ref<any>(null)

onMounted(() => {
	navigation.value = {
		prevEl: prevRef.value,
		nextEl: nextRef.value
	}
})

const { avatar, aboutText, historySlides } = defineProps<{
	avatar: string
	aboutText: string
	historySlides: HistoryItem[]
}>()
</script>

<template>
	<div
		class="relative bg-white px-[70px] mobile:px-4 tablet:px-10 pt-[220px] mobile:pt-[110px] tablet:pt-[150px] pb-[70px] mobile:pb-6 tablet:pb-10"
	>
		<NuxtImg
			:src="avatar"
			class="top-0 left-1/2 absolute shadow-md border-[10px] border-white mobile:border-[4px] tablet:border-[6px] border-solid rounded-full w-[400px] mobile:w-[180px] tablet:w-[260px] h-[400px] mobile:h-[180px] tablet:h-[260px] object-cover -translate-x-1/2 -translate-y-1/2"
		/>

		<div class="relative">
			<ClientOnly>
				<Swiper
					loop
					:modules="[Navigation, Pagination, Mousewheel]"
					:navigation="navigation"
					:pagination="{ clickable: true }"
					:mousewheel="{
						forceToAxis: true
					}"
					class="pb-10 tablet:pb-14"
				>
					<SwiperSlide class="p-[70px] mobile:px-2 tablet:px-4 mobile:py-4 tablet:py-6">
						<div class="flex flex-col gap-16 mobile:gap-6 tablet:gap-8">
							<Title text="About me" />

							<div class="text-[18px] mobile:text-[16px] mobile:text-left text-justify leading-relaxed">
								{{ aboutText }}
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide
						v-for="(history, index) in historySlides"
						:key="index"
						class="px-[70px] mobile:px-2 tablet:px-4 mobile:py-4 tablet:py-6 pt-[70px] pb-[100px]"
					>
						<div class="flex flex-col gap-16 mobile:gap-6 tablet:gap-8">
							<Title :text="history.slideName" />
							<History :key="index" :slide-data="history.slideData" />
						</div>
					</SwiperSlide>
				</Swiper>
			</ClientOnly>

			<div
				class="tablet:hidden top-1/2 right-0 left-0 z-10 absolute flex justify-between -translate-y-1/2 pointer-events-none"
			>
				<div
					ref="prevRef"
					class="z-10 bg-white/80 shadow-sm p-2 rounded-full hover:scale-105 transition-transform cursor-pointer pointer-events-auto rotate-180"
				>
					<Icon name="arrow" size="30" />
				</div>

				<div
					ref="nextRef"
					class="z-10 bg-white/80 shadow-sm p-2 rounded-full hover:scale-105 transition-transform cursor-pointer pointer-events-auto"
				>
					<Icon name="arrow" size="30" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
:deep(.swiper-pagination-bullets) {
	bottom: 0px !important;
}
</style>
