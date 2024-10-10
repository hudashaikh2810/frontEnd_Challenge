import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { BookServiceService } from '../../service/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-book',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './view-all-book.component.html',
  styleUrl: './view-all-book.component.css'
})
export class ViewAllBookComponent {
  pageNumber:number=0;
pageSize:number=4;
totalPages:number=0;
counter:number=0;
book:any[]=[];
first:boolean=true;
last:boolean=false;
numArray:any[]=[];
constructor(private bookService:BookServiceService,private route:Router){
this.fetchData();
console.log(this.numArray);
}
fetchData(){
  console.log(this.pageNumber)
  this.bookService.viewAllBook(this.pageNumber,this.pageSize).subscribe({
    next:(data)=>{
this.book=data.content;
this.totalPages=data.totalPages;
this.first=data.first;
this.last=data.last;

if(this.counter===0){
  let i=0;
  while(i<this.totalPages){
    this.numArray.push(i);
    i++;
  };
}
this.counter=this.counter+1;

    },
    error:(error)=>{
      console.log(error)
    }
  })
}
onPrev(){
  
  this.pageNumber=this.pageNumber-1;
  this.fetchData();
}
onNext(){
  console.log(this.pageNumber)
  this.pageNumber=this.pageNumber+1;
  this.fetchData();
}
onPageNumberClick(n:any){
  this.pageNumber=n;
  this.fetchData()
}
onEdit(b:any){
  console.log(b)
  this.route.navigate(["book/edit-book",b.id])
}
onDelete(b:any){
  console.log(b.id);
this.bookService.delete(b.id).subscribe({
  next:(data)=>{
    console.log(data);
    this.counter=0;
    this.numArray=[];
    
    this.fetchData();
  }
})

}
onClick(b:any){
console.log(b);
this.route.navigate(["book/view-book",b.id])

}
}
