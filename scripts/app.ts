
import { recipesFile } from "./data/recipes";
import { Ingredient } from "./entity/ingredient";
import { Recipe } from "./entity/recipe";

async function activateFilter(filter) {
	let activeFilterArea = filter.target.parentElement.previousElementSibling;
	let currentFilterArea = document.querySelector('.current-filters');

	const filterText = filter.target.innerHTML;

	//Do a ifselse for each filter
	selectedFilterIngredient.push(filterText);

	selectedFilterIngredient = selectedFilterIngredient.sort();

	activeFilterArea.innerHTML = '';
	currentFilterArea.innerHTML = '';
	selectedFilterIngredient.forEach(element => {
		activeFilterArea.innerHTML += `<span class='filter-element-selected'>${element}<span class="fa-solid fa-circle-xmark quit-selected-choice"></span></span>`;
		currentFilterArea.innerHTML += `<span class='current-filter-selected'>${element}<span class="fa-solid fa-xmark"></span></span>`;
	});

	const selectedOptionsDOM = document.querySelectorAll('.filter-element-selected');
	const currentFiltersDOM = document.querySelectorAll('.current-filter-selected');

	selectedOptionsDOM.forEach(element => { element.addEventListener('click', disableFilter) });
	currentFiltersDOM.forEach(element => { element.addEventListener('click', disableCurrentFilter) });
	filter.target.remove();

	applyFilters();
}

async function disableFilter(filter) {
	let currentFilters = document.querySelectorAll('.current-filter-selected');

	const filterText = filter.target.innerText;

	currentFilters.forEach(element => { element.innerText == filterText ? element.remove() : 0 });

	selectedFilterIngredient.splice(selectedFilterIngredient.indexOf(filterText), 1);

	createFilterOptionIngredient();

	filter.target.remove();

	applyFilters();
}

/**
 * Delete filter from current TODO remove filter on cross click
 */
async function disableCurrentFilter(DOMelement) {
	let currentFilter = DOMelement.target;
	let selectedOptions = document.querySelectorAll('.filter-element-selected');

	let filterText = currentFilter.innerText;

	selectedOptions.forEach(element => { element.innerText == filterText ? element.remove() : 0 });
	selectedFilterIngredient.splice(selectedFilterIngredient.indexOf(filterText), 1);

	createFilterOptionIngredient();

	currentFilter.remove();

	applyFilters();

}

async function applyFilters() {

	resultRecipes = [];

	recipes.forEach(recipe => {
		if (selectedFilterIngredient.every(v => recipe.ingredientsName.includes(v))) {
			resultRecipes.push(recipe);
		}
	})

	displayRecipes(resultRecipes);
}

async function createFilterOptionIngredient(search?: string) {
	const ingredientOptions = document.querySelector('.filter-ingredient-list');
	ingredientOptions.innerHTML = '';

	ingredientsList.forEach(ingredientElement => {
		if (!selectedFilterIngredient.includes(ingredientElement) && (search == undefined || search == '' || ingredientElement.includes(search))) {
			ingredientOptions.innerHTML += `<span class='filter-element'>${ingredientElement}</span>`;
		}
	});

	const ingredientsOptionsDOM = document.querySelectorAll('.filter-element');

	ingredientsOptionsDOM.forEach(element => { element.addEventListener('click', activateFilter) });
}

async function createFiltersTriggers() {
	const filterCategories = document.querySelectorAll('.filter-title');
	const ingredientSearchBar = document.querySelector('#search-ingredient');

	filterCategories.forEach(element => {
		element.addEventListener('click', switchViewCategoryElement);
	});

	ingredientSearchBar?.addEventListener('input', (field) => {
		createFilterOptionIngredient(field.target.value);
	});

	createFilterOptionIngredient();
}

async function addToIngredientList(ingredients: Array<Ingredient>) {
	ingredients.forEach(ingredient => {
		if (!ingredientsList.includes(ingredient.ingredient)) {
			ingredientsList.push(ingredient.ingredient);
		}
	});
}

async function switchViewCategoryElement(DOMelement) {

	let subMenu = DOMelement.target.nextElementSibling;

	//Unroll if click on chevron
	if (subMenu == null) {
		subMenu = DOMelement.target.parentNode.nextElementSibling;
	}

	if (subMenu.classList.contains('hidden-element-list')) {
		subMenu.classList.remove('hidden-element-list');
		subMenu.classList.add('showed-element-list');
	} else if (subMenu.classList.contains('showed-element-list')) {
		subMenu.classList.add('hidden-element-list');
		subMenu.classList.remove('showed-element-list');
	}
}

async function parseRecipes(recipesFile: Array<any>) {
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

async function displayRecipes(recipes: Recipe[]) {
	let recipesArea = document.querySelector('.recipes-cards');

	if (recipesArea !== null){
		recipesArea.innerHTML = '';
		recipes.forEach(recipe => {
			recipesArea.innerHTML += recipe.getDOMCard();
		});
	}
}

async function init() {
	parseRecipes(recipesFile);
	displayRecipes(recipes);
	createFiltersTriggers();


	const researchField = document.querySelector('#search-bar');

	researchField?.addEventListener('input', research);
}

let recipes: Array<Recipe> = [];
let resultRecipes: Array<Recipe> = [];
let ingredientsList: Array<string> = [];
let selectedFilterIngredient: Array<string> = [];

init();
