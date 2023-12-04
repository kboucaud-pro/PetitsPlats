import { Ingredient } from "./ingredient";

export class Recipe {
	constructor(
		public id: number,
		public name: string,
		public image: string,
		public servings: number,
		public time: number,
		public description: string,
		public appliance: string,
		public ustensils: Array<string>,
		public ingredients: Array<any>,
		public ingredientsName ?: Array<any>
	) {
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

		ingredients.forEach(element => {
			this.ingredients.push(new Ingredient(element.ingredient, element.quantity, element.unit));
			this.ingredientsName.push(element.ingredient);
		});
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

		this.ingredients.forEach((ingredient: Ingredient) => {
			cardDOM += ingredient.getDOMPart();
		});

		cardDOM += `</div>
				</div>
			</div>`;

		return cardDOM;
	}
}