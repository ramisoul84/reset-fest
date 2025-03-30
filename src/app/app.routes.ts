import { Routes } from '@angular/router';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DjerbaPageComponent } from './pages/djerba-page/djerba-page.component';
import { FashionPageComponent } from './pages/fashion-page/fashion-page.component';

export const routes: Routes = [
    { path: '', component: IntroPageComponent},  
    { path: 'home', component: HomePageComponent},
    { path: 'djerba', component: DjerbaPageComponent},
    { path: 'fashion', component: FashionPageComponent},  
    { path: '**', redirectTo: '' }
];
