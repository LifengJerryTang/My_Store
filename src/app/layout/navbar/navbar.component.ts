import {Component, OnInit} from '@angular/core';
import {faBars, faCartShopping, faRightToBracket, faWarehouse} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  protected readonly faBars = faBars;
  protected readonly faWarehouse = faWarehouse;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faRightToBracket = faRightToBracket;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }
}
