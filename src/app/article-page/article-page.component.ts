import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  @ViewChild('htmlData') htmlData!: ElementRef;
  users: any[] = [];
  constructor(private api:ArticleService ,private route: ActivatedRoute,private http: HttpClient){}

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
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
  
}
