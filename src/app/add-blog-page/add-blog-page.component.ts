import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-add-blog-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-blog-page.component.html',
  styleUrl: './add-blog-page.component.css'
})
export class AddBlogPageComponent  implements OnInit{
  formValue!:FormGroup;
  ArticleData!:any;
  private imagePath='assets/images'
  articleModelObject:Article=new Article();
  constructor(private formbuilder:FormBuilder,private api:ArticleService){}
  ngOnInit():void{
    this.formValue=this.formbuilder.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      photo : [''],
      blogPost : ['',Validators.required]
    });
  } 
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.formValue.patchValue({
      photo: file,
    });
  }
  private constructImagePath(photo: string): string {
    const photoArray = photo.split('\\');

 
  const lastWord = photoArray[photoArray.length - 1];
    console.log(lastWord)
    return `${this.imagePath}/${lastWord}`;
  }
  postArticleDetails(){
    this.articleModelObject.nom=this.formValue.value.firstName;
    this.articleModelObject.prenom=this.formValue.value.lastName;
    this.articleModelObject.photo=this.constructImagePath(this.formValue.value.photo);
    this.articleModelObject.blogPost=this.formValue.value.blogPost;

    this.api.addArticle(this.articleModelObject).subscribe((res: any)=>{
      console.log(res);
      alert("Article added Successfully")
      this.formValue.reset();
      window.location.pathname = "/";
    },
      (error: any)=>{
      alert("Something went wrong")
    }

    )

  }

}
