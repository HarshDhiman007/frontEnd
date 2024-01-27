import { Routes } from '@angular/router';
import { authenticationGuard } from './authentication.guard';
import { CardComponent } from './component/dashboard/card/card.component';
import { CommentsComponent } from './component/dashboard/comments/comments.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FavouriteComponent } from './component/favourite/favourite.component';
import { LoginComponent } from './component/login/login.component';
import { BlogsModuleComponent } from './component/header/blogs-module/blogs-module.component';
import { RegistrationComponent } from './component/registration/registration.component';


export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent,canActivate:[authenticationGuard]},
    {path:'blogs-module', component: BlogsModuleComponent,canActivate:[authenticationGuard]},
    {path:'card/:id', component: CardComponent},
    {path:'comments/:id', component: CommentsComponent},
    {path:'favourite', component: FavouriteComponent,canActivate:[authenticationGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent}
];
