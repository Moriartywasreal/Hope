import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Content } from '../model/content';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {
  
  contents:Content[];

  constructor(private apiService: ApiService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log("Hyuwaei");
    this.getContents();
    
  }

  getContents(){
    console.log("getContents inside");
    this.apiService.getContents().subscribe(res => {
      
        
      alert("hey");
      this.contents = res;

      for(let content of this.contents){
        content.content = content.content.split('[')[0];
      }
      console.log(this.contents);

    })
  }

  btnClick(id){
    console.log(id);
    this.router.navigate(['/admin/approve-form/'+id])
  }

}
