import { Ingredient } from "./ingredient";

export class Recipe {
	id: number;
	name: string;
	image: string;
	servings: number;
	time: number;
	description: string;
	appliance: string;
	ustensils: Array<string> = [];
	ingredients: Array<Ingredient> = [];

	constructor(
		id: number,
		name: string,
		image: string,
		servings: number,
		time: number,
		description: string,
		appliance: string,
		ustensils: Array<string>,
		ingredients: Array<any>
	) {
		this.id = id;
		this.name = name;
		this.image = image;
		this.servings = servings;
		this.time = time;
		this.description = description;
		this.appliance = appliance;
		this.ustensils = ustensils;

		ingredients.forEach(element => {
			this.ingredients.push(new Ingredient(element.ingredient, element.quantity, element.unit));
		})
	}

	/**
	 * getDOMCard
	 */
	public getDOMCard() {
		let cardDOM = /* html */`
	<div class="recipe-card">
				<img src="./assets/recipes/${this.image}" alt="${this.name}">
				<span class="time">${this.time} min</span>
				<h3>${this.name}</h3>
				<div class="recipe">
					<div class="recipe-block">
						<h4>Recette</h4>
						<p>${this.description}</p>
					</div>
					<h4>Ingrédients</h4>
					<div class="ingredients">`;

		this.ingredients.forEach(ingredient => {
			cardDOM += ingredient.getDOMPart();
		});

		cardDOM += `</div>
				</div>
			</div>`;
	}
}