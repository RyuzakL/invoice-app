<script setup>
import Logo from '@/components/LogoSVG.vue'
import DarkModeSVG from '@/components/DarkModeSVG.vue';
import LightModeSVG from '@/components/LightModeSVG.vue';
import avatar from '@/assets/image-avatar.jpg'
</script>

<template>
	<header class="h-[72px] bg-purpleVeryDark">
		<div class="flex justify-between items-center">
			<div
				class="grid place-items-center bg-purple h-[72px] w-[72px] rounded-r-2xl relative before:bg-purpleLight before:rounded-tl-2xl before:rounded-br-2xl before:absolute before:h-[35px] before:w-[72px] before:bottom-0 ">
				<Logo class="z-10"></Logo>
			</div>
			<div class="flex items-center justify-between gap-6 mr-6">
				<LightModeSVG class="hidden dark:block"></LightModeSVG>
				<DarkModeSVG class="dark:hidden"></DarkModeSVG>
				<div class="border border-solid border-gray opacity-20 h-[72px]" />
				<img class="rounded-full w-8" :src="avatar" alt="profil picture">
			</div>
		</div>
	</header>
</template>

