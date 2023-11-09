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

	constructor (
		id: number,
		name: string,
		image: string,
		servings: number,
		time: number,
		description: string,
		appliance: string,
		ustensils: Array<string>,
		ingredients: Array<any>
	){
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
}