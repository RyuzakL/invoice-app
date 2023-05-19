<script setup>
import ContainerFlex from './ContainerFlex.vue';
import IconPlusSVG from '@/components/icons/IconPlusSVG.vue'
</script>

<template>
	<ContainerFlex class="bg-purple pl-2 py-2 pr-4 rounded-full gap-2 cursor-pointer">
		<div class="grid place-items-center w-8 h-8 rounded-full bg-white">
			<IconPlusSVG />
		</div>
		<span class="text-white md:inline hidden">New Invoice</span>
		<span class="text-white md:hidden inline">New</span>
	</ContainerFlex>
</template>