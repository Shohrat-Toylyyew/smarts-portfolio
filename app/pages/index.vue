<script lang="ts" setup>
import WorkerName from '~/components/WorkerName.vue'
import WorkerInfo from '~/components/WorkerInfo.vue'
import WorkerSkills from '~/components/WorkerSkills.vue'
import WorkerPortfolio from '~/components/WorkerPortfolio.vue'
import Footer from '~/components/Footer.vue'
import { PROFILE_DATA } from '~/data/profileData'
</script>

<template>
	<div>
		<WorkerName
			:name="PROFILE_DATA.personal.fullName"
			:role="PROFILE_DATA.personal.role"
			:bg-image="PROFILE_DATA.personal.heroBg"
		/>

		<WorkerInfo
			:avatar="PROFILE_DATA.personal.avatar"
			:about-text="PROFILE_DATA.personal.aboutMe"
			:history-slides="PROFILE_DATA.history"
		/>

		<WorkerSkills :skills="PROFILE_DATA.skills" :bg-image="PROFILE_DATA.personal.skillsBg" />

		<WorkerPortfolio :projects="PROFILE_DATA.projects" />

		<Footer :contacts="PROFILE_DATA.contacts" :languages="PROFILE_DATA.languages" />
	</div>
</template>
