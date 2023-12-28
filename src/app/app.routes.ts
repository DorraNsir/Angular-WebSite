import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBlogPageComponent } from './add-blog-page/add-blog-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { BlogComponent } from './blog/blog.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'about',
        component:AboutPageComponent
    },
    {
        path:'contact',
        component:ContactPageComponent
    },
    {
        path:'add',
        component:AddBlogPageComponent
    },
    {
        path:'article/:id',
        component:ArticlePageComponent
    },
    {
        path:'edit/:id',
        component:EditPageComponent
    },
    {
        path:'loginPage',
        component:LoginComponent 
    },
    {
        path:'signup',
        component:SignupComponent
    },
];
