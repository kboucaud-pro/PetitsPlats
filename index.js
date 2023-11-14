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
Object.defineProperty(exports, "__esModule", { value: true });
const recipes_1 = require("./data/recipes");
const recipe_1 = require("./entity/recipe");
function parseRecipes(recipesFile) {
    return __awaiter(this, void 0, void 0, function* () {
        recipesFile.forEach(element => {
            recipes.push(new recipe_1.Recipe(element.id, element.name, element.image, element.servings, element.time, element.description, element.appliance, element.ustensils, element.ingredients));
        });
        console.log(recipes);
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('test');
        console.log(recipes_1.recipesFile);
        parseRecipes(recipes_1.recipesFile);
    });
}
let recipes = [];
init();
console.log('test');
