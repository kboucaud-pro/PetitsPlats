
import {recipesFile} from "./data/recipes";
import { Recipe } from "./entity/recipe";

async function parseRecipes(recipesFile: Array<any>){

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

	console.log(recipes);
}

async function init(){
	console.log('test');

	parseRecipes(recipesFile);
}

let recipes: Array<Recipe> = [];

init();

console.log('test');
