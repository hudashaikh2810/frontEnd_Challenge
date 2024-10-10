import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../../service/book-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgIf,NgFor],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
category:any[]=[];
c:any='';
title:any='';
price:any=0;
quantity:any=0;
description:any='';
errorMssg:any=undefined;
successMssg:any=undefined;
constructor(private bookService:BookServiceService){
this.bookService.getAllCategory().subscribe({
  next:(data)=>{
    this.category=data;
  },
  error:(error)=>{
    console.log(error)
  }
})
}
resetmsg(){
this.errorMssg=undefined;
this.successMssg=undefined;
}
onValidate(){
  if(this.title==='')
  {
    this.errorMssg="Title is required"
  }
  else{
    if(this.c===''){
      this.errorMssg="Category  is required"
  
    }
    else{
      if(this.description===''){
        this.errorMssg="Description  is required"
    
      }
      else{
        if(this.price==0){
          this.errorMssg="Price  is required"
      
        }
        else{
          if(this.quantity===0)
            {
              this.errorMssg="Quantity  is required"
          
            }
            else{
              this.onClick()

            }
        }
      }
    }
  }
  

  
  
  
}
onClick(){
this.bookService.addBook({
  "title":this.title,
  "price":this.price,
  "quantity":this.quantity,
  "category":this.c,
  "description":this.description
}).subscribe({
  next:(data)=>{
    this.errorMssg=undefined;
    this.successMssg="Book Added Successfully";

  },
  error:(error)=>{
    this.successMssg=undefined;
    this.errorMssg="Something went wrong"

  }
})
}
}
