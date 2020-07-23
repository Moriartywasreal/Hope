import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Content } from '../model/content';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  color: boolean = true;
  bgColor: boolean = true;
  content : Content;
  contentId: any;


  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router, private route:ActivatedRoute) { }

  metaData:FormGroup;

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
      this.contentId = params.id;
    });

    this.apiService.getContentById(this.contentId).subscribe(res => {
      console.log(res);
      this.content = res;

    
      this.content.content = this.content.content.split('[')[0];
      this.metaData = this.formBuilder.group({
        id: [this.content.id, Validators.required],
        title: [this.content.title, Validators.required],
        content: [this.content.content, Validators.required],
        description: [this.content.description, Validators.required],
        categories_id: [this.content.categories_id, Validators.required],
        is_approved: [this.content.is_approved, Validators.required],
        picture_location: [this.content.picture_location, Validators.required],
        category: [this.content.category, Validators.required],   
      })

      console.log("======================");
      console.log(this.metaData);


    })
  }

  postContent(){
    // console.log();
    console.log(this.metaData);
  }

  approve(data){
    // data.is_approved = 'YES';
    let is_approved = data.get('is_approved').value;
    console.log(data);
    console.log(is_approved);
    data.controls['is_approved'].setValue('YES');
    console.log(data);
    this.apiService.approveContent(data).subscribe(res => {
      console.log(res);
    })
  }

}
