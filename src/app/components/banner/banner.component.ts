import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Category } from '../../model/category';
import { Content } from '../../model/content';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  categories: Category[]
  contents: Content[];

  constructor(private service:ApiService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getCategories().subscribe(res => {
      this.categories = res;
      this.service.getContents().subscribe(response => {
        this.contents = response;
        console.log(this.contents)
        this.categories.forEach((element) => {
          var contents = [];
          let counter = 1
          this.contents.forEach((ele) => {
            if(element.id == ele.categories_id && counter <= 3){
              ele.content = ele.content.split('[')[0];
              let user_id = ele.users_id;
              if(user_id===null){
                ele.users_id = 0;
              }
              contents.push(ele);
              counter = counter+1;
            }
          })
          if(contents.length > 0){
            element.contents = contents;
          }
          
          contents = [];
        })
        console.log(this.categories)
      })
      
      // console.log(this.categories)
    })

    

    // console.log(this.categories)
    // console.log(this.contents)
    // this.modifyCategories();
  }

  modifyCategories(){
    // for (let [key, value] of Object.entries(this.categories)) {
    //   console.log("Key: "+key+" Value: "+value)
    // }
    
    console.log(this.categories)
  }

}
