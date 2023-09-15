import { Component } from '@angular/core';
import {faBars, faCartShopping, faWarehouse} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  protected readonly faBars = faBars;
  protected readonly faWarehouse = faWarehouse;
  protected readonly faCartShopping = faCartShopping;
}
