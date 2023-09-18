import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product | undefined;
  selectedCount: number = 1;

  @Output() addToCartEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  addToCart(): void {
    this.addToCartEmitter.emit(this.selectedCount);
  }

  selectionChanged(newSelection: number) {
    this.selectedCount = newSelection;
  }
}
