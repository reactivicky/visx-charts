const initState = {
	title: 'Click and Drag Me!',
	xTitle: 'X Axis Title',
	yTitle: 'Y Axis Title',
	chartType: [{ label: 'bar', id: 0 }],
	orientation: 'vertical',
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'title':
			return {
				...state,
				title: action.payload,
			}
		case 'xtitle':
			return {
				...state,
				xTitle: action.payload,
			}
		case 'ytitle':
			return {
				...state,
				yTitle: action.payload,
			}
		case 'chartType':
			return {
				...state,
				chartType: action.payload,
			}
		case 'orientation':
			return {
				...state,
				orientation: action.payload,
			}
		default:
			return state
	}
}

export default reducer
