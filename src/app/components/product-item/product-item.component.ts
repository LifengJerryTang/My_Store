import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product | undefined;
  selectedCount: number = 1;

  @Output() addToCartEmitter: EventEmitter<number> = new EventEmitter<number>();

  addToCart(): void {
    this.addToCartEmitter.emit(this.selectedCount);
  }
}
