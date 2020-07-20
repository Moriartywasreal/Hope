import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Category } from './model/category';

import { Router } from '@angular/router';

declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  categories: Category[] = [];
  admin:boolean = false;
  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(){
    

    this.apiService.getCategories().subscribe((res)=>{
      this.apiService.getCategories().subscribe((res)=>{
        console.log(res);
        this.categories = res; 
      });      
    });
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
