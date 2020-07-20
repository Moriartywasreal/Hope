import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Content } from '../model/content';
import { Router, ActivatedRoute } from '@angular/router';


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


  constructor(private apiService: ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      this.contentId = params.id;
    });

    this.apiService.getContentById(this.contentId).subscribe(res => {
      console.log(res);
      this.content = res;

    
      this.content.content = this.content.content.split('[')[0];
     

      console.log(this.content);
    })
  }

  postContent(formData){
    console.log(formData);
  }

  approve(data){
    data.is_approved = 'YES';

    console.log(data);
    this.apiService.approveContent(data).subscribe(res => {
      console.log(res);
    })
  }

}
