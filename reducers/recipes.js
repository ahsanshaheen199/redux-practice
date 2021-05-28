const recipesReducer = ( recipes = [], action ) => {
    switch (action.type) {
		case 'ADD_RECIPE':
			return [...recipes, { name: action.name }];
	}
    return recipes;
}

export default recipesReducer;