import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { SecurityListComponent } from './security-list/security-list.component';
import { NgModule } from "@angular/core";
import {employeeGuard} from "./guards/employee.guard";
// import {adminGuard} from "./guards/admin.guard";
import { WelcomeComponent } from './welcome/welcome.component';
import { adminGuard } from './guards/admin.guard';
import {ForexViewComponent} from "./forex-view/forex-view.component";
import {StockViewComponent} from "./stock-view/stock-view.component";
import {loginGuard} from "./guards/login.guard";
import {welcomeGuard} from "./guards/welcome.guard";


export const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [loginGuard] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [welcomeGuard] },
  {
    path: 'user',
    children: [
      { path: 'add', component: AddUserComponent },
      { path: 'update', component: UpdateUserComponent },
      { path: 'list', component: ListUserComponent },
    ],
    canActivateChild: [adminGuard]
  },
  {path:'user/set-password/:token', component: SetPasswordComponent},
  {
    path: 'security',
    children: [
      { path: 'all', component: SecurityListComponent },
      { path: "stock/:id", component: StockViewComponent }],
     canActivateChild: [employeeGuard],
     canActivate: [employeeGuard]
  },
  {path: 'forex/:id', component: ForexViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
