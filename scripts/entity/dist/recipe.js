"use strict";
exports.__esModule = true;
exports.Recipe = void 0;
var ingredient_1 = require("./ingredient");
var Recipe = /** @class */ (function () {
    function Recipe(id, name, image, servings, time, description, appliance, ustensils, ingredients, ingredientsName) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.image = image;
        this.servings = servings;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
        this.ingredients = ingredients;
        this.ingredientsName = ingredientsName;
        this.id = id;
        this.name = name;
        this.image = image;
        this.servings = servings;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
        this.ingredients = [];
        this.ingredientsName = [];
        ingredients.forEach(function (element) {
            _this.ingredients.push(new ingredient_1.Ingredient(element.ingredient, element.quantity, element.unit));
            _this.ingredientsName.push(element.ingredient);
        });
    }
    /**
     * getDOMCard
     */
    Recipe.prototype.getDOMCard = function () {
        var cardDOM = /* html */ "\n\t<div class=\"recipe-card\">\n\t\t\t\t<img src=\"./assets/recipes/" + this.image + "\" alt=\"" + this.name + "\">\n\t\t\t\t<span class=\"time\">" + this.time + " min</span>\n\t\t\t\t<h3>" + this.name + "</h3>\n\t\t\t\t<div class=\"recipe\">\n\t\t\t\t\t<div class=\"recipe-block\">\n\t\t\t\t\t\t<h4>Recette</h4>\n\t\t\t\t\t\t<p>" + this.description + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4>Ingr\u00E9dients</h4>\n\t\t\t\t\t<div class=\"ingredients\">";
        this.ingredients.forEach(function (ingredient) {
            cardDOM += ingredient.getDOMPart();
        });
        cardDOM += "</div>\n\t\t\t\t</div>\n\t\t\t</div>";
        return cardDOM;
    };
    return Recipe;
}());
exports.Recipe = Recipe;
