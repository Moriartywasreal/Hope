import { Component, OnInit,ViewChild, ContentChildren, QueryList, forwardRef,ChangeDetectorRef, Input } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCandidateComponent } from '../dialog-candidate/dialog-candidate.component';
import { Observable } from 'rxjs';
// export interface completinterviews {
//   name:any;
//   num: any;
//   date: any;
//   deg: any;
// }
//   [
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
//   {
//     name: 'Akhilesh',
//     num: '+91 98976766',
//     date: '03/09/2020',
//     deg:'Angular Dev'
//   },
// ];
@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})

export class ViewCandidateComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  @Input() dataSource : MatTableDataSource<any>; 
   
dialogCandidate: MatDialogRef<DialogCandidateComponent>;
constructor(private changeDetectorRef: ChangeDetectorRef,private dialogModel: MatDialog) {
  // @Input() completinterviews:any[];


 
  // dataSource = this.DATA;

  
  


  // @ViewChild(MatAccordion) accordion: MatAccordion;
  // headline:string;
  // title: String;
  // names: any;
  // selectedAll: any;
// completinterviewnames: string;
// completinterviewcontacts: any;
//  completinterviewdegs: string;
// completinterviewdates: any;
// completinterviewexps: any;

 

  // this.completinterviewnames = "Ramesh Suresh";  
  // this.completinterviewcontacts = "+91 9897475665";  
  // this.completinterviewdegs = "Angulr Developer";  
  // this.completinterviewdates = "09/12/2020";    
  // // this.completinterviewexps = "5 Year Exp";  
  // this.headline = "Example reusable";  
  // const DATA: completinterviews[] = [
  //     {  num: "+91 989866654", date:"09/12/2020",deg:"UI Dev" },
  //     {  num: "+91 989866654", date:"09/12/2020" ,deg:"MEAN Dev" }, 
  //     {  num: "+91 989866654", date:"09/12/2020" ,deg:"Angular Dev" }, 
  //     {  num: "+91 989866654", date:"09/12/2020" ,deg:".Net Dev" }, 
  //     {   num: "+91 989866654", date:"09/12/2020" ,deg:"Java Dev" }, 
  //   ];
    //  this.names = [
    //   { name: 'What is angular ? ', selected: false }, 
    //   { name: 'What is an router ? ', selected: false },
    // ]

  }
  dialog() {
    this.dialogCandidate = this.dialogModel.open(DialogCandidateComponent);
    }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
     
//   ques: any[] = [
//     { name: 'What is angular ? ', selected: false }, 
//      { name: 'What is an router ? ', selected: false }, 
//  ];
 
//  checkAll(ev) {
//    this.ques.forEach(x => x.state = ev.target.checked)
//  }

//  isAllChecked() {
//    return this.ques.every(_ => _.state);
//  }


//   selectAll() {
//     for (var i = 0; i < this.names.length; i++) {
//       this.names[i].selected = this.selectedAll;
//     }
//   }
//   checkIfAllSelected() {
//     this.selectedAll = this.names.every(function(item:any) {
//         return item.selected == true;
//       })
//   }
   
//   linkClick() {
//     console.log('link clicked')
//   } 
  
  ngOnInit() {
    
    console.log(this.dataSource);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }


}
