import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { BookServiceService } from '../../service/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [NavbarComponent,NgIf,NgFor,FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {
  id:any='';
errorMssg:any=undefined;
successMssg:any=undefined;
title:any;
price:number=0;
quantity:number=0;
description:any='';
c:any=''
category:any[]=[]
  constructor(private bookService:BookServiceService,private activateRoute:ActivatedRoute){
this.bookService.getAllCategory().subscribe({
  next:(data)=>{
    this.category=data;
  }
})
  }
  ngOnInit(): void {
   this.id=this.activateRoute.snapshot.paramMap.get('id'); 
   console.log(parseInt(this.id))
  this.bookService.getById(parseInt(this.id)).subscribe({
    next:(data)=>{
      this.title=data.title;
      this.c=data.category;
      this.price=data.price;
      this.description=data.description;
      this.quantity=data.quantity
    }
  })
  }
  onEdit(){
this.bookService.edit(parseInt(this.id),{
  "title":this.title,
  "price":this.price,
  "quantity":this.quantity,
  "category":this.c,
"description":this.description
}).subscribe({
  next:(data)=>{
    this.successMssg="Book Information updated successfully";
    this.errorMssg=undefined;
  },
  error:(error)=>{
    console.log(error)
    this.errorMssg="Something went wrong";
    this.successMssg=undefined
  }
})
  }
  resetmsg(){
    this.errorMssg=undefined;
    this.successMssg=undefined;
  }
}
