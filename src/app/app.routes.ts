import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostUpdateComponent } from './components/posts/post-update/post-update.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'posts',component:PostsComponent},
    {path:'post/:postId',component:PostDetailComponent},
    {path:'post-update/:postId',component:PostUpdateComponent},
    {path:'add-post', component: PostAddComponent},
    {path:'**',component:PagenotfoundComponent}
];
