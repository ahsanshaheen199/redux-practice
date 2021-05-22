import store from './store';
import { addIngredient } from './actions/ingredients';
import { addRecipe } from './actions/recipes';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addRecipe('Pancakes'));

store.dispatch(addIngredient('Pancakes', 'Egg', 3));
