import { createStore } from 'vuex';

export default createStore({
  state: {
    filters: [],
    invoices: [],
  },
  mutations: {
    SET_FILTERS(state, newFilters) {
      state.filters = newFilters;
    },
    SET_INVOICES(state, invoices) {
      state.invoices = invoices;
    },
  },
  actions: {
    updateFilters({ commit }, filters) {
      const filtersArr = [];
      filters.forEach((filter) => {
        if (!filter.isActive) return;
        filtersArr.push(filter.filterName.toLowerCase());
      });
      commit('SET_FILTERS', filtersArr);
    },
    defineInvoices({ commit }, invoices) {
      commit('SET_INVOICES', invoices);
    },
  },
  modules: {},
});

const fakearr = [
  { filterName: 'Draft', isActive: false },
  { filterName: 'Pending', isActive: false },
  { filterName: 'Paid', isActive: false },
];
