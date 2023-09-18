import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  totalPrice: number = 0;
  name: string = '';

  constructor (private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.totalPrice = +(this.route.snapshot.paramMap.get('totalPrice') as string);
    this.name = this.route.snapshot.paramMap.get('name') as string;
  }

}
