import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Category } from '../../model/category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  categories:Category[];

  constructor(private apiService: ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Hyuwaei");
    this.getCategories();
  }

  getCategories(){
    console.log("getCategories inside");
    this.apiService.getCategories().subscribe(res => {
      this.categories = res;
    })
  }

  btnClick(id){
    console.log(id);
    this.router.navigate(['/admin/edit-category/'+id])
  }

  addClick(){
    this.router.navigate(['/admin/add-category'])
  }
}
