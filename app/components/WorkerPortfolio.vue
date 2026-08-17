<script setup lang="ts">
import Title from '~/UI/Title.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { ProjectItem } from '~/types/profile'
import Icon from '~/UI/Icon/Icon.vue'

const { projects } = defineProps<{
	projects: ProjectItem[]
}>()

const prevRef = ref<HTMLElement | null>(null)
const nextRef = ref<HTMLElement | null>(null)
const navigation = ref<any>(null)
const isModalOpen = ref(false)
const activeProjectIndex = ref(0)
const activeMediaIndex = ref(0)
const modalSwiperRef = ref<any>(null)

const activeProject = computed(() => {
	return projects[activeProjectIndex.value]
})

const activeMedia = computed(() => {
	return activeProject.value?.mediaFiles?.[activeMediaIndex.value]
})

const openModal = (pIndex: number, mIndex: number) => {
	activeProjectIndex.value = pIndex
	activeMediaIndex.value = mIndex
	isModalOpen.value = true
}

const closeModal = () => {
	isModalOpen.value = false
}

const nextMedia = () => {
	if (!activeProject.value) return
	const list = activeProject.value.mediaFiles
	activeMediaIndex.value = (activeMediaIndex.value + 1) % list.length
}

const prevMedia = () => {
	if (!activeProject.value) return
	const list = activeProject.value.mediaFiles
	activeMediaIndex.value = (activeMediaIndex.value - 1 + list.length) % list.length
}

const onModalSlideChange = (swiper: any) => {
	activeMediaIndex.value = swiper.realIndex
}

const handlePaginationDotClick = (index: number) => {
	activeMediaIndex.value = index
	if (modalSwiperRef.value) {
		modalSwiperRef.value.slideTo(index)
	}
}

const keyHandler = (e: KeyboardEvent) => {
	if (!isModalOpen.value) return

	if (e.key === 'Escape') closeModal()
	if (e.key === 'ArrowRight') nextMedia()
	if (e.key === 'ArrowLeft') prevMedia()
}

watch(isModalOpen, open => {
	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

	if (open) {
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = `${scrollbarWidth}px`
	} else {
		document.body.style.overflow = ''
		document.body.style.paddingRight = ''
	}
})

watch(activeMediaIndex, newIndex => {
	if (modalSwiperRef.value && modalSwiperRef.value.realIndex !== newIndex) {
		modalSwiperRef.value.slideTo(newIndex)
	}
})

onMounted(() => {
	window.addEventListener('keydown', keyHandler)
	navigation.value = {
		prevEl: prevRef.value,
		nextEl: nextRef.value
	}
})

onBeforeUnmount(() => {
	window.removeEventListener('keydown', keyHandler)
	document.body.style.overflow = ''
})
</script>

<template>
	<div
		class="flex flex-col gap-20 mobile:gap-8 tablet:gap-12 px-[140px] mobile:px-4 tablet:px-10 py-[100px] mobile:py-12 tablet:py-16"
	>
		<Title text="Portfolio" />

		<div class="relative">
			<ClientOnly>
				<Swiper
					loop
					centeredSlides
					:slidesPerView="1"
					:autoHeight="true"
					:modules="[Navigation, Mousewheel]"
					:navigation="navigation"
					:mousewheel="{ forceToAxis: true }"
					class="transition-all duration-300 ease-in-out"
				>
					<SwiperSlide
						v-for="(project, pIndex) in projects"
						:key="project.name"
						class="px-[70px] mobile:px-0 tablet:px-4 h-auto"
						@class-name-change="activeProjectIndex = pIndex"
					>
						<div class="flex flex-col gap-8 mobile:gap-5 h-full">
							<div class="flex tablet:flex-col justify-between items-start tablet:gap-4 w-full">
								<div class="flex flex-col gap-2 max-w-[900px]">
									<h2 class="font-semibold mobile:text-xl tablet:text-2xl text-3xl">
										{{ project.name }}
									</h2>
									<p class="text-gray-700 mobile:text-sm leading-[170%]">
										{{ project.description }}
									</p>
								</div>

								<a
									v-if="project.url"
									:href="project.url"
									target="_blank"
									class="hover:bg-gray-300 px-5 py-2 mobile:py-3 border rounded-xl mobile:w-full tablet:w-auto text-center transition"
								>
									Visit
								</a>
							</div>

							<!-- Media Grid Items -->
							<div class="gap-5 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] mobile:grid-cols-1">
								<div
									v-for="(media, mIndex) in project.mediaFiles"
									:key="media"
									class="group relative shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-2xl aspect-video overflow-hidden cursor-pointer"
									@click="openModal(pIndex, mIndex)"
								>
									<div class="absolute inset-0 w-full h-full">
										<img :src="media" class="w-full h-full object-cover" />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</ClientOnly>

			<!-- Main Section Carousel Arrows -->
			<div
				class="tablet:hidden top-0 right-0 left-0 z-10 absolute flex justify-between pointer-events-none"
			>
				<div
					ref="prevRef"
					class="bg-white/50 hover:bg-white shadow-sm p-2 rounded-full rotate-180 transition cursor-pointer pointer-events-auto"
				>
					<Icon name="arrow" size="30" />
				</div>
				<div
					ref="nextRef"
					class="bg-white/50 hover:bg-white shadow-sm p-2 rounded-full transition cursor-pointer pointer-events-auto"
				>
					<Icon name="arrow" size="30" />
				</div>
			</div>
		</div>
	</div>

	<!-- MODAL LAYER -->
	<div v-if="isModalOpen" class="z-50 fixed inset-0 flex justify-center items-center bg-black/95">
		<button
			class="top-5 right-5 z-50 absolute flex justify-center items-center bg-black/40 backdrop-blur-md rounded-full w-12 h-12 text-white text-2xl"
			@click="closeModal"
		>
			✕
		</button>

		<button
			class="tablet:hidden left-5 z-40 absolute text-[100px] text-white hover:text-gray-300 transition select-none"
			@click="prevMedia"
		>
			‹
		</button>
		<button
			class="tablet:hidden right-5 z-40 absolute text-[100px] text-white hover:text-gray-300 transition select-none"
			@click="nextMedia"
		>
			›
		</button>

		<!-- FULLSCREEN SWIPABLE MODAL VIEWER -->
		<div class="flex justify-center items-center px-4 w-full h-full">
			<ClientOnly>
				<Swiper
					:initialSlide="activeMediaIndex"
					:slidesPerView="1"
					centeredSlides
					@swiper="modalSwiperRef = $event"
					@slideChange="onModalSlideChange"
					class="flex justify-center items-center w-full max-w-5xl h-[80vh]"
				>
					<SwiperSlide
						v-for="(media, mIndex) in activeProject?.mediaFiles"
						:key="mIndex"
						class="flex justify-center items-center !h-full select-none"
					>
						<div class="flex justify-center items-center w-full h-full pointer-events-auto">
							<img
								:src="media"
								class="shadow-xl rounded-lg max-w-full max-h-[75vh] object-contain pointer-events-none"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</ClientOnly>
		</div>

		<!-- Bottom Indicator Pagination Tracker Links -->
		<div
			class="bottom-8 z-40 absolute flex gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full"
		>
			<div
				v-for="(_, i) in activeProject?.mediaFiles"
				:key="i"
				@click="handlePaginationDotClick(i)"
				class="rounded-full w-2.5 h-2.5 transition-all duration-200 cursor-pointer"
				:class="i === activeMediaIndex ? 'bg-white scale-110' : 'bg-white/30'"
			/>
		</div>
	</div>
</template>

<style scoped>
:deep(.swiper) {
	transition: height 0.3s ease-in-out;
}
</style>
