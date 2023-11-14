
import {recipesFile} from "./data/recipes";
import { Recipe } from "./entity/recipe";

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
}

let recipes: Array<Recipe> = [];

init();
