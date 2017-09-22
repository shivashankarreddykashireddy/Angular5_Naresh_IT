import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _http:HttpClient){
    this._http.get("https://www.w3schools.com/angular/customers.php")
        .subscribe(res=>{
          console.log(res);
        });
  }
}
