import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { CookieHelperService } from '../helpers/cookie-helper.service';
import { HttpHelperService } from '../helpers/http-helper.service';
import { environment } from '../../../environments/environment';
import * as contentDisposition from 'content-disposition';
import * as R from 'ramda';

@Injectable()
export class DataAccessService {

  constructor(private http: HttpHelperService, private cookieMethodService: CookieHelperService) { }

  private resultData: any[];//結果陣列
  private ASID: string = this.cookieMethodService.getCookie('ASID');//重要且必帶回中間層的參數
  private headers: Headers = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache'
  });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });

  /**@function 捕捉錯誤方法
   * @param error @type {any} 錯誤
   * @returns @description return錯誤訊息
   */
  handleError(errorResponse) {
    let errObj;
    try {
      let resObj = errorResponse.json();
      errObj = resObj.error;
    } catch (ex1) {
      try {
        errObj = errorResponse.error.error;
      } catch (ex2) {
        let errMsg = `${errorResponse.status} - ${errorResponse.statusText}`;
        console.error(errMsg); // console show錯誤訊息
        return Observable.throw(errMsg);
      }
    }

    let errMsg = errObj && !R.isEmpty(errObj)
      ? `${errObj.CSmessage} (error: ${errObj.errCode})`
      : errorResponse.status
        ? `${errorResponse.status} - ${errorResponse.statusText}`
        : 'Server error';
    console.error(errMsg); // console show錯誤訊息
    return Observable.throw(errMsg);
  }
  /**@function 呼叫中間層公用方法
   * @param input @type {object} 第一階段的input
   * @param url @type {string} 呼叫restful API的route
   * @returns @description return 來自中間層的json物件
   */
  getData<T>(url: string): Observable<T> {
    // 呼叫restful API
    return this.http.get(`${environment.RestApiIP}${url}`, this.options)
      .map((response: Response) => {
        this.resultData = response.json();
        return this.resultData;
      })
      .catch(this.handleError);
  }
  postData<T>(input: object, url: string): Observable<T> {
    // 呼叫restful API
    return this.http.post(`${environment.RestApiIP}${url}`, input, this.options)
      .map((response: Response) => {
        this.resultData = response.json();
        return this.resultData;
      })
      .catch(this.handleError);
  }

  patchData(input: object, url: string): Observable<any[]> {
    // 呼叫restful API
    return this.http.patch(`${environment.RestApiIP}${url}`, input, this.options)
      .map((response: Response) => {
        this.resultData = response.json();
        return this.resultData;
      })
      .catch(this.handleError);
  }
}
