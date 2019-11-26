import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'posts', component:PostListComponent},
  {path: 'posts/new', component: PostFormComponent},
  {path:'',redirectTo:'/posts',pathMatch:'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
