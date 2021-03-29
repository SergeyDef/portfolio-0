
export default{
	state: {
		pageIndicator: '',
	},
	getters: {
		GET_PAGE_INDICATOR : (state) =>{
			return state.pageIndicator
		},
	},
	mutations: {
		GET_PAGE_INDICATOR: (state, payloade) => {
			console.log(payloade);
			state.pageIndicator = payloade;
		}
	},
	actions: {
	},
}
