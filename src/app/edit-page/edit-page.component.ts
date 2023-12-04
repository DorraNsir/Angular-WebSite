import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../service/article.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article } from '../model/article';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  ArticleData!:any;
formValue!: FormGroup;
private imagePath='assets/images'
articleModelObject:Article=new Article();
 id!:number;
  constructor(private api:ArticleService ,private route: ActivatedRoute,private formbuilder:FormBuilder){}
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id']
      this.getArticles(this.id);
      console.log(this.ArticleData)
    });
    this.formValue=this.formbuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      photo : [''],
      blogPost : ['',Validators.required]
    });
  }
  getArticles(id: number) {
    this.api.getArticleById(id).subscribe(
      (res: Article) => {
        this.ArticleData = res;
        // Initialize the form with retrieved values
        this.formValue.patchValue({
          firstName: this.ArticleData?.nom,
          lastName: this.ArticleData?.prenom,
          blogPost: this.ArticleData?.blogPost
        });
      },
      (error) => {
        console.error('Error fetching article data:', error);
      }
    );
  }

  private constructImagePath(photo: File): string {
    return `${this.imagePath}/${photo.name}`;
  }
  updateArticle(){
    this.articleModelObject.nom=this.formValue.value.firstName;
    this.articleModelObject.prenom=this.formValue.value.lastName;
    this.articleModelObject.photo=this.constructImagePath(this.formValue.value.photo);
    this.articleModelObject.blogPost=this.formValue.value.blogPost;
    // console.log(this.articleModelObject.nom)
    this.api.updateArticle(this.id,this.articleModelObject).subscribe(res=>{
      alert("updated Successfully");
      window.location.pathname = "/";

    })
    
  }

}
