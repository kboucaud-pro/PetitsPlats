
import {recipesFile} from "./data/recipes";
import { Ingredient } from "./entity/ingredient";
import { Recipe } from "./entity/recipe";

async function createFilters(){
	const filterCategories = document.querySelectorAll('.filter-type');

	filterCategories.forEach(element => {
		element.addEventListener('click', switchViewCategoryElement);
	});
}

async function addToIngredientList(ingredients: Array<Ingredient>){
	
}

async function switchViewCategoryElement(){

}

async function parseRecipes(recipesFile: Array<any>){
	console.log('test');

	recipesFile.forEach(element => {
		recipes.push(new Recipe(
			element.id,
			element.name,
			element.image,
			element.servings,
			element.time,
			element.description,
			element.appliance,
			element.ustensils,
			element.ingredients
		));

		addToIngredientList(recipes[recipes.length - 1].ingredients);
	});
}

async function displayRecipes(recipes: Recipe[]){
	let recipesArea = document.querySelector('.recipes-cards');

	if (recipesArea !== null){
		recipes.forEach(recipe => {
			recipesArea.innerHTML += recipe.getDOMCard();
		});
	}	
}

async function init(){
	parseRecipes(recipesFile);
	displayRecipes(recipes);
	createFilters();
}

let recipes: Array<Recipe> = [];
let ingredients: Array<Ingredient> = [];

init();
