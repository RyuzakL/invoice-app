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
	<header class="h-screen bg-purpleVeryDark flex-col items-center justify-between w-28 pb-8 rounded-r-2xl">
		<div
			class="grid place-items-center bg-purple h-28 w-full rounded-r-2xl relative before:bg-purpleLight before:rounded-tl-3xl before:rounded-br-3xl before:absolute before:h-[55px] before:w-full before:bottom-0 ">
			<Logo class="z-10 scale-150"></Logo>
		</div>

		<div class="w-full flex flex-col items-center gap-10">
			<LightModeSVG @click="setColorTheme" class="hidden dark:block scale-150 cursor-pointer hover:brightness-200">
			</LightModeSVG>
			<DarkModeSVG @click="setColorTheme" class="dark:hidden scale-150 cursor-pointer brightness-200"></DarkModeSVG>
			<div class="border border-solid border-gray opacity-20 w-full" />
			<img class="rounded-full w-12" :src="avatar" alt="profil picture">
		</div>


	</header>
</template>

// refléchir si pour en faire une side bar je fais un composant ou j'utilise que du CSS