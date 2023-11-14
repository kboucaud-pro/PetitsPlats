
export class Ingredient {
	constructor(
		public ingredient: string,
		public quantity?: number,
		public unit?: string) {
		this.ingredient = ingredient;
		this.quantity = quantity;
		this.unit = unit;
	}

	/**
	 * getDOMPart
	 */
	public getDOMPart() {
		const descriptionQuantity = [this.quantity, this.unit].filter(v => v).join(' ');

		let htmlDOMPart = /* html */`
		<div class="ingredient">
		<h5>${this.ingredient}</h5>
		<span class="quantity">${descriptionQuantity}</span>
		</div>`;

		return htmlDOMPart;
	}
}