
export default{
	state: {
		pageIndicator: false,
	},
	getters: {
		GET_PAGE_INDICATOR : (state) =>{
			return state.pageIndicator
		},
	},
	mutations: {
		GET_PAGE_INDICATOR: (state, payloade) => {
			let indicator;
			if (payloade == 'home') {
				indicator = false;
			} else if (payloade == 'account') {
				indicator = true;
			} else {
				indicator = false;
			}
			state.pageIndicator = indicator;
		}
	},
	actions: {
	},
}
