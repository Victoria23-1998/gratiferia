import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '', component:HomeComponent
},
{
  path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    
    {
      preloadingStrategy: PreloadAllModules
    }
  
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
