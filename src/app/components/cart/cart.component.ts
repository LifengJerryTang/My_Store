import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {CartItem} from "../../models/cart-item";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  checkoutForm: FormGroup = this.fb.group({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    creditCardNum: new FormControl('',
      [Validators.required,
                    Validators.minLength(16),
                    Validators.maxLength(16)])
  })

  constructor(private cartService: CartService, private fb: FormBuilder,
              private router: Router, private auth: AuthService) {

  }

  ngOnInit() {
    this.cartService.allCartItems.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcTotalPrice();
    });

  }

  calcTotalPrice(): void {

    let total: number = 0;

    for (let cartItem of this.cartItems) {
      total += cartItem.count * cartItem.product.price
    }

    this.totalPrice = total;

  }

  changeCartItemAmount(item: CartItem, newAmount: number) {

    if (newAmount === 0) {
      this.cartService.deleteCartItem(item);
      alert(`Deleted ${item.product.name} successfully!`);

      return;
    }

    let updatedItem = {...item, count: newAmount};

    this.cartService.updateCartItem(updatedItem);

  }

  checkout(): void {

    if (this.checkoutForm.valid) {

      let totalPrice = this.totalPrice;
      let name: string = this.checkoutForm.controls['fullName'].value;

      this.cartService.clearCart();

      this.router.navigate(['confirmation', {name, totalPrice}]);

    } else {
      alert('Check your entered data please!');
    }

  }
}
