import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class CookieHelperService {

  constructor(private cookieService: CookieService) { }

  /**@function 取得cookie公用方法
     * @param key @type {string} cookie key
     * @returns return cookie 值
     */
    getCookie(key: string): string {
      return this.cookieService.get(key);
  }
  /**@function 給定cookie公用方法
   * @param key @type {string} cookie key
   * @param value @type {string} cookie value
   * @returns return void
   */
  setCookie(key: string, value: string): void {
      return this.cookieService.put(key, value);
  }
  /**@function 移除cookie公用方法
   * @param key @type {string} cookie key
   * @returns return void
   */
  removeCookie(key: string): void {
      return this.cookieService.remove(key);
  }
}
