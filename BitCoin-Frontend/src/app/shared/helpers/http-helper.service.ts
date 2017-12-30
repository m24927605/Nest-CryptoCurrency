import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpHelperService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }
  
  /**@function 取得cookie方法
   * @param key @type {string} cookie key
   * @returns return cookie 值
   */
  private getCookie(key: string) {
    let ca: string[] = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${key}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  /**@function http請求公用方法
   * @description 任何http請求的表頭都加上token
   * @param url @type {string} 請求路徑
   * @param options @type {RequestOptionsArgs} 可有可無http表頭參數
   * @returns return http request Observable物件
   */

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    //任何http請求的表頭都加上token 
    let token = this.getCookie('token');
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = { headers: new Headers() };
      }
      options.headers.set('Content-Type', 'application/json');
      options.headers.set('token', `${token}`);
    } else {
      // we have to add the token to the url object
      url.headers.set('Content-Type', 'application/json');
      url.headers.set('token', `${token}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }
  /**@function 捕捉驗證失敗公用方法
   * @param self @type {HttpService}
   * @return return 錯誤訊息
   */
  private catchAuthError(self: HttpHelperService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}
