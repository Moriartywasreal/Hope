import { Component } from "@angular/core";
import { AppComponent } from "../app.component"
import { ApiService } from '../api/api.service';
import { Category } from '../model/category';
import {formatDate} from '@angular/common';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    categories: Category[] = [];
    myDate : String;
    current = new Date();
    today : String;


    constructor(private apiService: ApiService){}
    

    ngOnInit(){
      this.today = this.current.toLocaleDateString('en-US',{weekday: 'long'});
      console.log(this.today);
      this.myDate = formatDate(new Date(), 'MMMM dd, yyyy', 'en');
      console.log(this.myDate);
        this.apiService.getCategories().subscribe((res)=>{
          this.apiService.getCategories().subscribe((res)=>{
            console.log(res);
            this.categories = res; 
          });      
        });
      }

}