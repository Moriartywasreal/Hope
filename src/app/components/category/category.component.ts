import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../model/category';
import { Content } from '../../model/content';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryId:number;
  category: Category;
  contents: Content[];

  constructor(private route:ActivatedRoute, private service:ApiService) { }

  ngOnInit() {
    alert("I am in categoryComponent")
    this.route.params.subscribe( (params) => {
      if(params.category_id){
        this.categoryId = params.category_id;
      }
    });
    console.log(this.categoryId)
    this.service.getCategoryById(this.categoryId).subscribe( res => {
      this.category = res;
      console.log("category", this.category)
    })
   
    this.service.getContentsByCategoryId(this.categoryId).subscribe( response => {
      this.contents = response;
    } )
  }

}
