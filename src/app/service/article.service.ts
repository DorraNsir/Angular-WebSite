import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }
  getArticleById(id:number){
    return this.http.get<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  addArticle(article: any) {
    return this.http.post<any>("http://localhost:3000/posts",article).pipe(map((res:any)=>{
      return res
    }))
  }

  
  updateArticle(id: number, article: any){
    return this.http.put<any>("http://localhost:3000/posts/"+id, article).pipe(map((res:any)=>{
      return res;
    }));
  };


  deleteArticle(id: number){
    console.log("Deleting article with id="+id);
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      } ))
  }
}
