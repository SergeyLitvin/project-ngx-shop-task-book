import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent implements OnInit {
	@Input() product: ICartProduct = {} as ICartProduct;

	productRating() {
		if (this.product.rating < 1) {
			return 'd-md-none';
		} else {
			return '';
		}
	}

	ngOnInit(): void {
		console.log('this._product(): ', this.product);
	}
}
