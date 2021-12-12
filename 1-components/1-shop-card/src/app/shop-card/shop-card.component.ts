import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input() public product: ICartProduct = {} as ICartProduct;

	public productRating() {
		if (this.product.rating < 1) {
			return 'd-md-none';
		} else {
			return '';
		}
	}

	public productRatingAmount() {
		return Math.round(this.product.rating);
	}

	public setPrice() {
		return this.product.count * this.product.price;
	}

	@Output()
	public increment = new EventEmitter();

	public incrementProductInCart(): void {
		this.increment.emit();
	}

	@Output()
	public decrement = new EventEmitter();

	public decrementProductInCart(): void {
		this.decrement.emit();
	}
}
