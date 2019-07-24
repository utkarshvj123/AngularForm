import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url='https://sandbox786.com/ng-api/';
  constructor(private http:HttpClient) { }

  getUsers(value):Observable<any>{
    console.log(value)
    return this.http.post<any>(this.url+'getUsers',value);
  }
  setUser(value):Observable<any>{
    return this.http.post<any>(this.url+'createUser',value);
  }
detailValue:any;
  settingDetailOnClick(detail){
    console.log(detail);
    this.detailValue=detail;
  }

  gettingDetailOnClick(){
    return this.detailValue;
  }

updateUserDetail(value){
  return this.http.post<any>(this.url+'updateUser',value);
}

}
