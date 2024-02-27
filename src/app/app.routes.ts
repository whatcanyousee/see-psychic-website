import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'demo', component: DemoComponent }
  // { path: '**', component: PageNotFoundComponent },
];
