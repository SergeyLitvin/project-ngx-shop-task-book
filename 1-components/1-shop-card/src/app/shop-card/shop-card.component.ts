import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent implements OnInit {
	@Input() product: ICartProduct = {} as ICartProduct;
	// private _product = this.product;

	ngOnInit(): void {
		console.log('this._product(): ', this.product);
	}
}
