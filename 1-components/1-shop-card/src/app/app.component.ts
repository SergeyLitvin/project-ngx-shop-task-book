import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { cartProduct, ICartProduct } from '../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	public title = '1. Интерполяция и связывание (Карточка товара в корзине)';

	public data = '';

	public terminalMessage!: string;

	public product: ICartProduct = cartProduct;

	public increment() {
		this.terminalMessage = 'Увеличение количества товара';
		this.product.count++;
	}

	public decrement() {
		this.terminalMessage = 'Уменьшение количества товара';
		if (this.product.count === 1) {
			return;
		}
		this.product.count--;
	}

	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	ngOnInit(): void {
		// console.log('this.product(): ', this.product);
	}
}
