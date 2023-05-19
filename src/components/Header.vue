<script setup>
import Logo from '@/components/icons/LogoSVG.vue'
import DarkModeSVG from '@/components/icons/DarkModeSVG.vue';
import LightModeSVG from '@/components/icons/LightModeSVG.vue';
import avatar from '@/assets/image-avatar.jpg'

function setColorTheme() {
	if (!document.documentElement.classList.contains('dark'))
		document.documentElement.classList.add('dark')
	else
		document.documentElement.classList.remove('dark')
}
</script>

<template>
	<header class="h-[72px] mb-8 bg-purpleVeryDark">
		<div class="flex justify-between items-center">
			<div
				class="grid place-items-center bg-purple h-[72px] w-[72px] rounded-r-2xl relative before:bg-purpleLight before:rounded-tl-2xl before:rounded-br-2xl before:absolute before:h-[35px] before:w-[72px] before:bottom-0 ">
				<Logo class="z-10"></Logo>
			</div>
			<div class="flex items-center justify-between gap-6 mr-6">
				<LightModeSVG @click="setColorTheme" class="hidden dark:block"></LightModeSVG>
				<DarkModeSVG @click="setColorTheme" class="dark:hidden"></DarkModeSVG>
				<div class="border border-solid border-gray opacity-20 h-[72px]" />
				<img class="rounded-full w-8" :src="avatar" alt="profil picture">
			</div>
		</div>
	</header>
</template>

// refléchir si pour en faire une side bar je fais un composant ou j'utilise que du CSS