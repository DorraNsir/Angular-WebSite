import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent implements OnInit {
  ArticleData!:any;
  Articles!:any;
 
  constructor(private api:ArticleService ,private route: ActivatedRoute){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']
      console.log('ID from URL:', id);
      this.getArticles(id);
    });
    this.getAllDetails();
  }
  getArticles(id:number){
    this.api.getArticleById(id).subscribe(res=>{
      this.ArticleData=res;
    })
  }
  getAllDetails(){
    this.api.getArticle().subscribe(res=>{
      this.Articles=res;
    })
  }
  updateArticle(){
    this.api.updateArticle(this.Articles.id,this.Articles).subscribe(res=>{
      this.ArticleData=res;
    })
  }

  
}
