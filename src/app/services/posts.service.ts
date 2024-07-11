import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  addPost(data:any){
    return this.http.post(`${this.apiUrl}`, data);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPostById(id:any): Observable<any> {
    return this.http.get(this.apiUrl+'/'+id);
  }

  updatePost(id:any, data:any){
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePost(id:any){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
