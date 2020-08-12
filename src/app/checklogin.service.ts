import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckloginService {

  constructor() { }

  checklogin() {
    var login  = localStorage.getItem("islogged");
    if(login=="true") {
      return true;
    } else {
      return false;
    }
  }

  
}
