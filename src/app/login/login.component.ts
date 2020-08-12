import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {"username" :"", "password":"" };
  ErUser: any;
  ErPass: any;

  userrole = "admin";
  constructor(
    private _snackBar: MatSnackBar,
    private route: Router
  ) { 
    
  }
  ngOnInit(): void {
    
  }

  checkusernameis() {
    if(this.userData.username=="") {
      this.ErUser = "username is required";
    } else {
      this.ErUser = "";
    }
  }
  checkuserpadd() {
    this.checkusernameis();
    if(this.userData.username=="") {
      this.ErPass = "Password is required";
    } else {
      this.ErPass = "";
    }
  }

  login() {
    if(this.userData.username=="admin" && this.userData.password=="123") {
      localStorage.setItem("islogged", "true");
      this.route.navigate(['/dashboard'], { queryParams: { role: "admin" } });
    } else if(this.userData.username=="ganesh" && this.userData.password=="789"){
      localStorage.setItem("islogged", "true");
      this.route.navigate(['/dashboard'], { queryParams: { role: "normal" } });
    } else {
      this.openSnackBar("Invalid username or password","Close");
    }
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
