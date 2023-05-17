<script setup>
defineProps({
	invoice: {
		required: true,
		type: Object
	}
})

const classStatus = {
	bgDark: {
		pending: ["bg-[#ff910017]"],
		draft: ["bg-[#dfe3fa17]"],
		paid: ["bg-[#33d7a013]"]
	},
	bgLight: {
		pending: ["bg-[#FF8F00]"],
		draft: ["bg-lightGray"],
		paid: ["bg-[#33D69F]"]
	},
	text: {
		pending: ["text-[#FF8F00]"],
		draft: ["text-lightGray"],
		paid: ["text-[#33D69F]"]
	}

}

function firstLetterCapital(string) {
	return string.slice(0, 1).toUpperCase() + string.slice(1)
}

function formatCurrency(itemsArr) {
	const total = itemsArr.reduce((prev, current) => { return prev += current.total }, 0)
	return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(total);
}

function formatDate(inputDate) {
	const months = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];

	const date = new Date(inputDate);
	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return `${day} ${month} ${year}`;
}

</script>

<template>
	<div>
		<div class="flex justify-between ">
			<span>
				<span class="text-blue">#</span>
				<span class="text-black dark:text-white transition ">{{ invoice.id }}</span>
			</span>
			<span class="text-gray dark:text-lightGray transition">{{ invoice.clientName }}</span>
		</div>
		<div class="mt-2 flex items-center justify-between ">
			<span class="">
				<span class="text-gray dark:text-lightGray transition font-light text-base">Due
					{{ formatDate(invoice.paymentDue) }}</span>
				<div class="dark:text-white text-black text-[18px] font-medium">{{ formatCurrency(invoice.items) }}</div>
			</span>
			<div :class="classStatus.bgDark[invoice.status]" class="w-28 rounded-lg px-4 py-2 ">
				<div class="flex items-center justify-center gap-2 ">
					<span :class="classStatus.bgLight[invoice.status]" class="h-2 w-2 rounded-full "> </span>
					<span :class="classStatus.text[invoice.status]"
						class="relative ">{{ firstLetterCapital(invoice.status) }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
