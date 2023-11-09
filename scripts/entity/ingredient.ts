
export class Ingredient {
	ingredient: string;
	quantity?: number;
	unit?: string;

	constructor(
		ingredient: string,
		quantity?: number,
		unit?: string) {
		this.ingredient = ingredient;
		this.quantity = quantity;
		this.unit = unit;
	}

	/**
	 * getDOMPart
	 */
	public getDOMPart() {
		let htmlDOMPart = /* html */`
		<div class="ingredient">
		<h5>${this.ingredient}</h5>`;

		if (this.quantity && this.unit) {
			htmlDOMPart += `<span class="quantity">${this.quantity} ${this.unit}</span>`;
		} else if (this.quantity) {
			htmlDOMPart += `<span class="quantity">${this.quantity}</span>`;
		} else if (this.unit) {
			htmlDOMPart += `<span class="quantity">${this.unit}</span>`;
		}
		
		htmlDOMPart += `</div>`;

		return htmlDOMPart;
	}
}