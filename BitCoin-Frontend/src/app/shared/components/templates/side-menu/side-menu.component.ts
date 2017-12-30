import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/collection';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public clientOnlineList = 'client/onlineList';
  public clientAccountFeatures = 'client/accountFeatures';
  public clientLoginRecord = 'client/loginRecord';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
