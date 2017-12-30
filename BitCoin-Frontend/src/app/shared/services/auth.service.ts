import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { LoginResult } from '../models/login-result';
import { environment } from '../../../environments/environment';
import { DataAccessService } from './data-access.service';
import { CookieHelperService } from '../helpers/collection';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private dataAccess: DataAccessService,
    private cookie: CookieHelperService,
    private router: Router
  ) { }

  login(loginId: string, password: string): Observable<LoginResult> {
    return this.http.post<LoginResult>(`${environment.RestApiIP}/login`, { LoginID: loginId.trim(), Password: password.trim() })
      .do(res => {
        this.cookie.setCookie('token', res.token);
        this.cookie.setCookie('role', res.role);
      })
      .catch(this.dataAccess.handleError);
  }

  logout() {
    this.cookie.removeCookie('token');
    this.cookie.removeCookie('role');
    this.router.navigateByUrl('/login');
  }
  
  isAuth(): Observable<boolean> {
    // TODO: 驗證登入狀態 ( cookie 有值 && call api 驗證 token 有効)
    if (this.cookie.getCookie('token') && this.cookie.getCookie('role')) {
      return Observable.of(true);
    } else {
      return Observable.of(false);
    }
  }
}
