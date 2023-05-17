<script setup>
import { reactive, watch } from 'vue';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue'
import { useStore } from 'vuex';
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from '@headlessui/vue'

const store = useStore()

const filterStates = reactive([
	{ filterName: 'Draft', isActive: false },
	{ filterName: 'Pending', isActive: false },
	{ filterName: 'Paid', isActive: false }
])

function setActiveItems(item) {
	item.isActive = !item.isActive
}

watch(filterStates, () => {
	store.dispatch('updateFilters', filterStates)
	console.log(store.state.filters)
})

</script>

<template>
	<Listbox multiple>
		<div class="relative text-black dark:text-white transition">
			<ListboxButton>
				<div class="flex items-center gap-3">
					<span>Filter</span>
					<ChevronDownIcon />
				</div>
			</ListboxButton>
			<ListboxOptions class="absolute bg-white dark:bg-purpleVeryDark w-[150px] rounded-lg top-10 left-0 transition z-10">
				<ListboxOption class="my-2 w-[100px] mx-auto " v-for="filter, index in filterStates" :key="index"
					:value="filter.filterName">
					<div class="cursor-pointer" @click="() => setActiveItems(filter)">
						<input class="accent-purple mr-2 transition" type="checkbox" v-model="filter.isActive" @click.stop>
						<label>{{ filter.filterName }}</label>
					</div>
				</ListboxOption>
			</ListboxOptions>
		</div>
	</Listbox>
</template>

Faire en sorte que la logic du menu fonctionne.