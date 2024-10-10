import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  getAllCategory():Observable<any>{
    return this.http.get('http://localhost:8081/book/category');
  }
  addBook(obj:any):Observable<any>{
    return this.http.post('http://localhost:8081/book/add',obj);

  }
  viewAllBook(pageNumber:number,pageSize:number):Observable<any>{
    return this.http.get('http://localhost:8081/book/getAll?page='+pageNumber+'&size='+pageSize);

  }
delete(id:number):Observable<any>{
  return this.http.delete('http://localhost:8081/book/delete/'+id)
}
getById(id:number):Observable<any>{
  return this.http.get('http://localhost:8081/book/get/'+id)

}
edit(id:number,obj:any):Observable<any>{
  return this.http.put('http://localhost:8081/book/update/'+id,obj)

}
}