import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../service/book-service.service';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent implements OnInit
 {
products:any[]=[];
title:any='';
description:any='';
id:any;
constructor(private activateRoute:ActivatedRoute,private bookService:BookServiceService){}
ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    console.log(parseInt(this.id))
    this.bookService.getById(parseInt(this.id)).subscribe({
      next:(data)=>{
        this.title=data.title;
        this.description=data.description;
      },
      error:(error)=>{
        console.log(error)
      }
    })
}

}
