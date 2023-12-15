import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../service/article.service';
// import { FormBuilder,FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { Article } from '../model/article';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  ArticleData!:any;
  constructor(private api:ArticleService){}
  ngOnInit():void{
    this.getAllArticles();
  }
  getAllArticles(){
    this.api.getArticle().subscribe(res=>{
      this.ArticleData=res;
    })
  }
  Ondelete(id:number){
    this.api.deleteArticle(id).subscribe(res=>{
      alert("article Deleted")
      this.getAllArticles();
    })
  }
}
