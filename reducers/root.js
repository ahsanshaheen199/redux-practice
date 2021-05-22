const initialState = {
	recipes: [
		{
			name: 'Omelette',
		},
	],
	ingredients: [
		{
			recipe: 'Omelette',
			name: 'Egg',
			quantity: 2,
		},
	],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_RECIPE':
			return {
				...state,
				recipes: [...state.recipes, { name: action.name }],
			};
		case 'ADD_INGREDIENT':
			return {
				...state,
				ingredients: [
					...state.ingredients,
					{
						recipe: action.recipe,
						name: action.name,
						quantity: action.quantity,
					},
				],
			};
		default:
			return state;
	}
};

export default rootReducer;
