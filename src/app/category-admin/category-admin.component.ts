import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Category } from '../model/category';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {
  color: boolean = true;
  bgColor: boolean = true;
  category : Category;
  categoryId: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router, private route:ActivatedRoute) { }

  metaData:FormGroup;
  updateMode: boolean = false;

  ngOnInit(): void {
    this.metaData = new FormGroup({
      title: new FormControl(),
      id: new FormControl(),
      content: new FormControl(),
      description: new FormControl(),
      categories_id: new FormControl(),
      is_approved: new FormControl(),
      picture_location: new FormControl(),
      category: new FormControl(),
    });
    this.route.params.subscribe( (params) => {
      if(params.id){
        this.categoryId = params.id;
        this.updateMode = true;
      }else{
        this.categoryId = null;
      }
      
    });

    if(this.categoryId!= null){

      this.apiService.getCategoryById(this.categoryId).subscribe(res => {
        console.log(res);
        this.category = res;
        this.metaData = this.formBuilder.group({
          id: [this.category.id, Validators.required],
          title: [this.category.title, Validators.required],
          description: [this.category.description, Validators.required],
        })
        console.log("======================");
        console.log(this.metaData);
      })
    }else{
      this.metaData = this.formBuilder.group({
        title: ["", Validators.required],
        description: ["", Validators.required],
      })
    }
  }

  postContent(){

  }

  postCategory(data){
    console.log("updateCategory data", data);
    this.apiService.addCategory(data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/all-categories'])
    })
  }

  updateCategory(data){
    console.log("updateCategory data", data);
    this.apiService.updateCategory(data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/admin/all-categories'])
    })
  }

}
