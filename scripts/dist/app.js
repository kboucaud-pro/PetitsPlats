"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var recipes_1 = require("./data/recipes");
var recipe_1 = require("./entity/recipe");
function updateResearch(e) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            searchValue = e.target.value;
            applyFilters();
            return [2 /*return*/];
        });
    });
}
function activateFilter(filter) {
    return __awaiter(this, void 0, void 0, function () {
        var activeFilterArea, currentFilterArea, filterText, filterType, selectedOptionsDOM, currentFiltersDOM;
        return __generator(this, function (_a) {
            activeFilterArea = filter.target.parentElement.previousElementSibling;
            currentFilterArea = document.querySelector('.current-filters');
            filterText = filter.target.innerHTML;
            filterType = '';
            if (filter.target.parentNode.classList.contains('filter-ingredient-list')) {
                filterType = 'ingredient';
            }
            else if (filter.target.parentNode.classList.contains('filter-appliance-list')) {
                filterType = 'appliance';
            }
            else if (filter.target.parentNode.classList.contains('filter-ustensil-list')) {
                filterType = 'ustensil';
            }
            //Do a ifselse for each filter
            if (filterType == 'ingredient') {
                selectedIngredient.push(filterText);
            }
            else if (filterType == 'appliance') {
                selectedAppliance.push(filterText);
            }
            else if (filterType == 'ustensil') {
                selectedUstensils.push(filterText);
            }
            selectedIngredient = selectedIngredient.sort();
            selectedAppliance = selectedAppliance.sort();
            selectedUstensils = selectedUstensils.sort();
            activeFilterArea.innerHTML = '';
            currentFilterArea.innerHTML = '';
            //A améliorer (function a part vraiment utile ?)
            selectedIngredient.forEach(function (element) {
                if (filterType == 'ingredient') {
                    activeFilterArea.innerHTML += "<span class='filter-element-selected'>" + element + "<span class=\"fa-solid fa-circle-xmark quit-selected-choice\"></span></span>";
                }
                currentFilterArea.innerHTML += "<span class='current-filter-selected current-ingredient-selected'>" + element + "<span class=\"fa-solid fa-xmark\"></span></span>";
            });
            selectedAppliance.forEach(function (element) {
                if (filterType == 'appliance') {
                    activeFilterArea.innerHTML += "<span class='filter-element-selected'>" + element + "<span class=\"fa-solid fa-circle-xmark quit-selected-choice\"></span></span>";
                }
                currentFilterArea.innerHTML += "<span class='current-filter-selected current-appliance-selected'>" + element + "<span class=\"fa-solid fa-xmark\"></span></span>";
            });
            selectedUstensils.forEach(function (element) {
                if (filterType == 'ustensil') {
                    activeFilterArea.innerHTML += "<span class='filter-element-selected'>" + element + "<span class=\"fa-solid fa-circle-xmark quit-selected-choice\"></span></span>";
                }
                currentFilterArea.innerHTML += "<span class='current-filter-selected current-ustensil-selected'>" + element + "<span class=\"fa-solid fa-xmark\"></span></span>";
            });
            selectedOptionsDOM = document.querySelectorAll('.filter-element-selected');
            currentFiltersDOM = document.querySelectorAll('.current-filter-selected');
            selectedOptionsDOM.forEach(function (element) { element.addEventListener('click', disableFilter); });
            currentFiltersDOM.forEach(function (element) { element.addEventListener('click', disableCurrentFilter); });
            filter.target.remove();
            applyFilters();
            return [2 /*return*/];
        });
    });
}
function disableFilter(filter) {
    return __awaiter(this, void 0, void 0, function () {
        var currentFilters, filterText, parent;
        return __generator(this, function (_a) {
            currentFilters = document.querySelectorAll('.current-filter-selected');
            filterText = filter.target.innerText;
            parent = filter.target.parentNode;
            currentFilters.forEach(function (element) { element.innerText == filterText ? element.remove() : 0; });
            if (parent.classList.contains('selected-ingredient-options')) {
                selectedIngredient.splice(selectedIngredient.indexOf(filterText), 1);
            }
            else if (parent.classList.contains('selected-appliance-options')) {
                selectedAppliance.splice(selectedAppliance.indexOf(filterText), 1);
            }
            else if (parent.classList.contains('selected-ustensil-options')) {
                selectedUstensils.splice(selectedUstensils.indexOf(filterText), 1);
            }
            createFilterOptionIngredient();
            createFilterOptionAppliance();
            createFilterOptionUstensil();
            filter.target.remove();
            applyFilters();
            return [2 /*return*/];
        });
    });
}
/**
 * Delete filter from current TODO remove filter on cross click
 */
function disableCurrentFilter(DOMelement) {
    return __awaiter(this, void 0, void 0, function () {
        var currentFilter, selectedOptions, filterText;
        return __generator(this, function (_a) {
            currentFilter = DOMelement.target;
            selectedOptions = document.querySelectorAll('.filter-element-selected');
            filterText = currentFilter.innerText;
            selectedOptions.forEach(function (element) { element.innerText == filterText ? element.remove() : 0; });
            if (currentFilter.classList.contains('current-ingredient-selected')) {
                selectedIngredient.splice(selectedIngredient.indexOf(filterText), 1);
            }
            else if (currentFilter.classList.contains('current-appliance-selected')) {
                selectedAppliance.splice(selectedAppliance.indexOf(filterText), 1);
            }
            else if (currentFilter.classList.contains('current-ustensil-selected')) {
                selectedUstensils.splice(selectedUstensils.indexOf(filterText), 1);
            }
            createFilterOptionIngredient();
            createFilterOptionAppliance();
            createFilterOptionUstensil();
            currentFilter.remove();
            applyFilters();
            return [2 /*return*/];
        });
    });
}
function applyFilters() {
    return __awaiter(this, void 0, void 0, function () {
        var conformRecipes;
        return __generator(this, function (_a) {
            resultRecipes = [];
            conformRecipes = [];
            if (selectedFilterIngredient.length == 0) {
                resultRecipes = recipes;
            }
            recipes.forEach(function (recipe) {
                if (selectedIngredient.every(function (v) { return recipe.ingredientsName.includes(v); })
                    && selectedUstensils.every(function (v) { return recipe.ustensils.includes(v); })
                    && selectedAppliance.every(function (v) { return recipe.appliance.includes(v); })) {
                    resultRecipes.push(recipe);
                }
            });
            if (searchValue.length >= 3) {
                resultRecipes.forEach(function (element) {
                    if (element.name.includes(searchValue) || element.description.includes(searchValue)) {
                        conformRecipes.push(element);
                    }
                });
            }
            else {
                conformRecipes = resultRecipes;
            }
            displayRecipes(conformRecipes);
            return [2 /*return*/];
        });
    });
}
function createFilterOptionIngredient(search) {
    return __awaiter(this, void 0, void 0, function () {
        var ingredientOptions, ingredientsOptionsDOM;
        return __generator(this, function (_a) {
            ingredientOptions = document.querySelector('.filter-ingredient-list');
            ingredientOptions.innerHTML = '';
            ingredientsList.forEach(function (ingredientElement) {
                if (!selectedIngredient.includes(ingredientElement) && (search == undefined || search == '' || ingredientElement.includes(search))) {
                    ingredientOptions.innerHTML += "<span class='filter-element'>" + ingredientElement + "</span>";
                }
            });
            ingredientsOptionsDOM = document.querySelectorAll('.filter-element');
            ingredientsOptionsDOM.forEach(function (element) { element.addEventListener('click', activateFilter); });
            return [2 /*return*/];
        });
    });
}
function createFilterOptionAppliance(search) {
    return __awaiter(this, void 0, void 0, function () {
        var applianceOptions, appliancesOptionsDOM;
        return __generator(this, function (_a) {
            applianceOptions = document.querySelector('.filter-appliance-list');
            applianceOptions.innerHTML = '';
            applianceList.forEach(function (applianceElement) {
                if (!selectedAppliance.includes(applianceElement) && (search == undefined || search == '' || applianceElement.includes(search))) {
                    applianceOptions.innerHTML += "<span class='filter-element'>" + applianceElement + "</span>";
                }
            });
            appliancesOptionsDOM = document.querySelectorAll('.filter-element');
            appliancesOptionsDOM.forEach(function (element) { element.addEventListener('click', activateFilter); });
            return [2 /*return*/];
        });
    });
}
function createFilterOptionUstensil(search) {
    return __awaiter(this, void 0, void 0, function () {
        var ustensilOptions, ustensilsOptionsDOM;
        return __generator(this, function (_a) {
            ustensilOptions = document.querySelector('.filter-ustensil-list');
            ustensilOptions.innerHTML = '';
            ustensilsList.forEach(function (ustensilElement) {
                if (!selectedUstensils.includes(ustensilElement) && (search == undefined || search == '' || ustensilElement.includes(search))) {
                    ustensilOptions.innerHTML += "<span class='filter-element'>" + ustensilElement + "</span>";
                }
            });
            ustensilsOptionsDOM = document.querySelectorAll('.filter-element');
            ustensilsOptionsDOM.forEach(function (element) { element.addEventListener('click', activateFilter); });
            return [2 /*return*/];
        });
    });
}
function createFiltersTriggers() {
    return __awaiter(this, void 0, void 0, function () {
        var filterCategories, ingredientSearchBar;
        return __generator(this, function (_a) {
            filterCategories = document.querySelectorAll('.filter-title');
            ingredientSearchBar = document.querySelector('#search-ingredient');
            filterCategories.forEach(function (element) {
                element.addEventListener('click', switchViewCategoryElement);
            });
            ingredientSearchBar === null || ingredientSearchBar === void 0 ? void 0 : ingredientSearchBar.addEventListener('input', function (field) {
                createFilterOptionIngredient(field.target.value);
            });
            createFilterOptionIngredient();
            createFilterOptionAppliance();
            createFilterOptionUstensil();
            return [2 /*return*/];
        });
    });
}
function addToIngredientList(ingredients) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ingredients.forEach(function (ingredient) {
                if (!ingredientsList.includes(ingredient.ingredient)) {
                    ingredientsList.push(ingredient.ingredient);
                }
            });
            return [2 /*return*/];
        });
    });
}
function addToUstensilsList(ustensils) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ustensils.forEach(function (ustensil) {
                if (!ustensilsList.includes(ustensil)) {
                    ustensilsList.push(ustensil);
                }
            });
            return [2 /*return*/];
        });
    });
}
function switchViewCategoryElement(DOMelement) {
    return __awaiter(this, void 0, void 0, function () {
        var subMenu;
        return __generator(this, function (_a) {
            subMenu = DOMelement.target.nextElementSibling;
            //Unroll if click on chevron
            if (subMenu == null) {
                subMenu = DOMelement.target.parentNode.nextElementSibling;
            }
            if (subMenu.classList.contains('hidden-element-list')) {
                subMenu.classList.remove('hidden-element-list');
                subMenu.classList.add('showed-element-list');
            }
            else if (subMenu.classList.contains('showed-element-list')) {
                subMenu.classList.add('hidden-element-list');
                subMenu.classList.remove('showed-element-list');
            }
            return [2 /*return*/];
        });
    });
}
function parseRecipes(recipesFile) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            recipesFile.forEach(function (element) {
                recipes.push(new recipe_1.Recipe(element.id, element.name, element.image, element.servings, element.time, element.description, element.appliance, element.ustensils, element.ingredients));
                addToIngredientList(recipes[recipes.length - 1].ingredients);
                addToUstensilsList(recipes[recipes.length - 1].ustensils);
                if (!applianceList.includes(element.appliance)) {
                    applianceList.push(element.appliance);
                }
            });
            return [2 /*return*/];
        });
    });
}
function displayRecipes(recipes) {
    return __awaiter(this, void 0, void 0, function () {
        var recipesArea;
        return __generator(this, function (_a) {
            recipesArea = document.querySelector('.recipes-cards');
            if (recipesArea !== null) {
                recipesArea.innerHTML = '';
                recipes.forEach(function (recipe) {
                    recipesArea.innerHTML += recipe.getDOMCard();
                });
            }
            return [2 /*return*/];
        });
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var researchField;
        return __generator(this, function (_a) {
            parseRecipes(recipes_1.recipesFile);
            displayRecipes(recipes);
            createFiltersTriggers();
            researchField = document.querySelector('#search-bar');
            researchField === null || researchField === void 0 ? void 0 : researchField.addEventListener('input', updateResearch);
            return [2 /*return*/];
        });
    });
}
var recipes = [];
var resultRecipes = [];
var ingredientsList = [];
var applianceList = [];
var ustensilsList = [];
var selectedIngredient = [];
var selectedAppliance = [];
var selectedUstensils = [];
var searchValue = '';
init();
