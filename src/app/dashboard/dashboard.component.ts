import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CheckloginService } from '../checklogin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource = [
    {id: 1, name: 'admin', phoneno: 989898989, address: 'Shirdi, Maharashtra, India', role:"admin"},
    {id: 1, name: 'narendra', phoneno: 989898989, address: 'Shirdi, Maharashtra, India', role:"admin"},
    {id: 1, name: 'ganesh', phoneno: 989898989, address: 'Shirdi, Maharashtra, India', role:"normal"}
  ];
  displayedColumns: string[] = ['id', 'name', 'phoneno', 'address'];
  sub: any;
  userrole : any;
  
  
  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private checklog: CheckloginService
  ) {
    
    var res = this.checklog.checklogin();
    if(!res) {
      this.router.navigate(['/'], { replaceUrl: true });
    }
   }

  ngOnInit(): void {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.userrole = params['role'];
    });
  }

  adduser() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: {id: 1, name: '', phoneno: "", address: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataSource.push(result);
      this.openSnackBar("User Created Successfully", "OK");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 8000,
    });
  }

  logout() {
    localStorage.removeItem("islogged");
    this.router.navigate(['/'], { replaceUrl: true });
  }

}


@Component({
  selector: 'add-new-user',
  templateUrl: 'add-new-user.html',
  styleUrls: ['add-new-user.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


 

}
