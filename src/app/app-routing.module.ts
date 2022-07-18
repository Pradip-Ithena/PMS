import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './project/dashboard/dashboard.component';
import { ProjectModule } from './project/project.module';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children:[
      {
        path:'project',
        loadChildren:()=>ProjectModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
