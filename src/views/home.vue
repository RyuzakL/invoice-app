<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Header from '@/components/Header.vue'
import DesktopHeader from '../components/DesktopHeader.vue'
import Container from '@/components/Container.vue'
import ContainerFlex from '@/components/ContainerFlex.vue'
import NewInvoiceBtn from '@/components/NewInvoiceBtn.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import MobilePreviewInvoice from '@/components/MobilePreviewInvoice.vue'
import DesktopPreviewInvoice from '@/components/DesktopPreviewInvoice.vue'

const store = useStore()
const invoices = computed(() => store.state.invoices)
const filters = computed(() => store.state.filters)

const filteredInvoices = computed(() => {
	return invoices.value.filter((invoice) => {
		if (filters.value.includes(invoice.status) || filters.value.length === 0) return invoice
	})
})

const invoicesLength = computed(() => filteredInvoices.value.length)
</script>

<template>
	<Header class="lg:hidden block " />
	<div class="flex">
		<DesktopHeader class="lg:flex hidden" />
		<Container class="max-w-[730px] lg:mt-24">
			<ContainerFlex class="lg:mb-16">
				<div>
					<h1 class="text-black dark:text-white ">Invoices</h1>
					<span v-if="invoicesLength >= 1" class="text-black dark:text-white text-lg font-light md:inline hidden">There
						are
						{{ invoicesLength }}
						total invoices
					</span>
					<span v-if="invoicesLength >= 1" class="text-black dark:text-white text-lg font-light md:hidden inline">
						{{ invoicesLength }}
						invoices
					</span>
					<span v-else class="text-black dark:text-white text-lg font-light">No invoices</span>
				</div>
				<ContainerFlex class="gap-4">
					<FilterSelect />
					<NewInvoiceBtn />
				</ContainerFlex>
			</ContainerFlex>
			<div
				class="dark:bg-purpleDark bg-white transition mt-5 p-5 md:p-6 rounded-lg hover:outline-purple hover:outline cursor-pointer hover:outline-2"
				v-for="invoice, index in filteredInvoices" :key="index">
				<MobilePreviewInvoice class="md:hidden block " :invoice="invoice" />
				<DesktopPreviewInvoice class="md:flex hidden" :invoice="invoice" />
			</div>
		</Container>
	</div>
</template>

