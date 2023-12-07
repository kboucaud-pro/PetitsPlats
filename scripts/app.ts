
import { recipesFile } from "./data/recipes";
import { Ingredient } from "./entity/ingredient";
import { Recipe } from "./entity/recipe";

async function activateFilter(filter) {
	let activeFilterArea = filter.target.parentElement.previousElementSibling;
	let currentFilterArea = document.querySelector('.current-filters');

	const filterText = filter.target.innerHTML;
	let filterType: string = '';

	if (filter.target.parentNode.classList.contains('filter-ingredient-list')){
		filterType = 'ingredient';
	} else if (filter.target.parentNode.classList.contains('filter-appliance-list')){
		filterType = 'appliance';
	} else if (filter.target.parentNode.classList.contains('filter-ustensil-list')){
		filterType = 'ustensil';
	}

	//Do a ifselse for each filter
	if (filterType == 'ingredient'){
		selectedIngredient.push(filterText);
	} else if (filterType == 'appliance'){
		selectedAppliance.push(filterText);
	} else if (filterType == 'ustensil'){
		selectedUstensils.push(filterText);
	}

	selectedIngredient = selectedIngredient.sort();
	selectedAppliance = selectedAppliance.sort();
	selectedUstensils = selectedUstensils.sort();

	activeFilterArea.innerHTML = '';
	currentFilterArea.innerHTML = '';
	//A améliorer (function a part vraiment utile ?)
	selectedIngredient.forEach(element => {
		if (filterType == 'ingredient'){
			activeFilterArea.innerHTML += `<span class='filter-element-selected'>${element}<span class="fa-solid fa-circle-xmark quit-selected-choice"></span></span>`;
		}
		currentFilterArea.innerHTML += `<span class='current-filter-selected current-ingredient-selected'>${element}<span class="fa-solid fa-xmark"></span></span>`;
	});
	selectedAppliance.forEach(element => {
		if (filterType == 'appliance'){
			activeFilterArea.innerHTML += `<span class='filter-element-selected'>${element}<span class="fa-solid fa-circle-xmark quit-selected-choice"></span></span>`;
		}
		currentFilterArea.innerHTML += `<span class='current-filter-selected current-appliance-selected'>${element}<span class="fa-solid fa-xmark"></span></span>`;
	});
	selectedUstensils.forEach(element => {
		if (filterType == 'ustensil'){
			activeFilterArea.innerHTML += `<span class='filter-element-selected'>${element}<span class="fa-solid fa-circle-xmark quit-selected-choice"></span></span>`;
		}
		currentFilterArea.innerHTML += `<span class='current-filter-selected current-ustensil-selected'>${element}<span class="fa-solid fa-xmark"></span></span>`;
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
	const parent = filter.target.parentNode;

	currentFilters.forEach(element => { element.innerText == filterText ? element.remove() : 0 });

	if (parent.classList.contains('selected-ingredient-options')){
		selectedIngredient.splice(selectedIngredient.indexOf(filterText), 1);
	} else if (parent.classList.contains('selected-appliance-options')){
		selectedAppliance.splice(selectedAppliance.indexOf(filterText), 1);
	} else if (parent.classList.contains('selected-ustensil-options')){
		selectedUstensils.splice(selectedUstensils.indexOf(filterText), 1);
	}

	createFilterOptionIngredient();
	createFilterOptionAppliance();
	createFilterOptionUstensil();

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

	if (currentFilter.classList.contains('current-ingredient-selected')){
		selectedIngredient.splice(selectedIngredient.indexOf(filterText), 1);
	} else if (currentFilter.classList.contains('current-appliance-selected')){
		selectedAppliance.splice(selectedAppliance.indexOf(filterText), 1);
	} else if (currentFilter.classList.contains('current-ustensil-selected')){
		selectedUstensils.splice(selectedUstensils.indexOf(filterText), 1);
	}

	createFilterOptionIngredient();
	createFilterOptionAppliance();
	createFilterOptionUstensil();

	currentFilter.remove();

	applyFilters();
}

async function applyFilters() {

	resultRecipes = [];

	recipes.forEach(recipe => {
		if (selectedIngredient.every(v => recipe.ingredientsName.includes(v))
			&& selectedUstensils.every(v => recipe.ustensils.includes(v))
			&& selectedAppliance.every(v => recipe.appliance.includes(v))) {
			resultRecipes.push(recipe);
		}
	})

	displayRecipes(resultRecipes);
}

async function createFilterOptionIngredient(search?: string) {
	const ingredientOptions = document.querySelector('.filter-ingredient-list');
	ingredientOptions.innerHTML = '';

	ingredientsList.forEach(ingredientElement => {
		if (!selectedIngredient.includes(ingredientElement) && (search == undefined || search == '' || ingredientElement.includes(search))) {
			ingredientOptions.innerHTML += `<span class='filter-element'>${ingredientElement}</span>`;
		}
	});

	const ingredientsOptionsDOM = document.querySelectorAll('.filter-element');

	ingredientsOptionsDOM.forEach(element => { element.addEventListener('click', activateFilter) });
}

async function createFilterOptionAppliance(search?: string) {
	const applianceOptions = document.querySelector('.filter-appliance-list');
	applianceOptions.innerHTML = '';

	applianceList.forEach(applianceElement => {
		if (!selectedAppliance.includes(applianceElement) && (search == undefined || search == '' || applianceElement.includes(search))) {
			applianceOptions.innerHTML += `<span class='filter-element'>${applianceElement}</span>`;
		}
	});

	const appliancesOptionsDOM = document.querySelectorAll('.filter-element');

	appliancesOptionsDOM.forEach(element => { element.addEventListener('click', activateFilter) });
}

async function createFilterOptionUstensil(search?: string) {
	const ustensilOptions = document.querySelector('.filter-ustensil-list');
	ustensilOptions.innerHTML = '';

	ustensilsList.forEach(ustensilElement => {
		if (!selectedUstensils.includes(ustensilElement) && (search == undefined || search == '' || ustensilElement.includes(search))) {
			ustensilOptions.innerHTML += `<span class='filter-element'>${ustensilElement}</span>`;
		}
	});

	const ustensilsOptionsDOM = document.querySelectorAll('.filter-element');

	ustensilsOptionsDOM.forEach(element => { element.addEventListener('click', activateFilter) });
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
	createFilterOptionAppliance();
	createFilterOptionUstensil();
}

async function addToIngredientList(ingredients: Array<Ingredient>) {
	ingredients.forEach(ingredient => {
		if (!ingredientsList.includes(ingredient.ingredient)) {
			ingredientsList.push(ingredient.ingredient);
		}
	});
}

async function addToUstensilsList(ustensils: Array<string>){
	ustensils.forEach(ustensil => {
		if (!ustensilsList.includes(ustensil)){
			ustensilsList.push(ustensil);
		}
	})
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
		addToUstensilsList(recipes[recipes.length - 1].ustensils);
		if (!applianceList.includes(element.appliance)){
			applianceList.push(element.appliance);
		}
	});
}

async function displayRecipes(recipes: Recipe[]) {
	let recipesArea = document.querySelector('.recipes-cards');

	recipesArea.innerHTML = '';

	if (recipesArea !== null) {
		recipes.forEach(recipe => {
			recipesArea.innerHTML += recipe.getDOMCard();
		});
	}
}

async function init() {
	parseRecipes(recipesFile);
	displayRecipes(recipes);
	createFiltersTriggers();

}

let recipes: Array<Recipe> = [];
let resultRecipes: Array<Recipe> = [];
let ingredientsList: Array<string> = [];
let applianceList: Array<string> = [];
let ustensilsList: Array<string> = [];
let selectedIngredient: Array<string> = [];
let selectedAppliance: Array<string> = [];
let selectedUstensils: Array<string> = [];

init();
