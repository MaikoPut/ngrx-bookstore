import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { BookComponent } from './components/book.component/book.component';
import { LoginComponent } from './components/auth/login.component/login.component';
import { RegisterComponent } from './components/auth/register.component/register.component';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
];