import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path: "signin", component: SigninComponent},
  {path: "home", component: HomeComponent},
  {path: "users", component: UsersComponent},
  {path: "detail/:id", component: UserDetailComponent},
  {path: "posts", component: PostsComponent},
  {path: "home/register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
