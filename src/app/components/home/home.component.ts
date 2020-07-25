import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Category } from '../../model/category';
import { Content } from '../../model/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  contents: Content[];

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.service.getCategories().subscribe( res => {
      this.categories = res;
      this.service.getContents().subscribe(response => {
        this.contents = response;
        console.log(this.contents)
        this.categories.forEach((element) => {
          var contents = [];
          let counter = 1
          this.contents.forEach((ele) => {
            if(element.id == ele.categories_id && counter <= 3){
              contents.push(ele);
              counter = counter+1;
            }
          })
          if(contents.length > 0){
            element.contents = contents;
          }
          
          contents = [];
        })
        var cats = [];
        this.categories.forEach((cat) => {
          if(cat.contents){
            cats.push(cat);
          }
        })
        this.categories = cats;
        console.log(this.categories)
      })
    })
  }

}
