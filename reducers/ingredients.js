const ingredientsReducer = ( ingredients = [], action ) => {
    switch (action.type) {
		case 'ADD_INGREDIENT':
			return [
					...ingredients,
					{
						recipe: action.recipe,
						name: action.name,
						quantity: action.quantity,
					},
				];
	}
    return ingredients;
}

export default ingredientsReducer;