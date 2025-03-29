import { Routes } from '@angular/router';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: IntroPageComponent},  
    { path: 'home', component: HomePageComponent},    
    { path: '**', redirectTo: '' }
];
