import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PnfComponent } from './pnf/pnf.component';


const routes: Routes = [
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'services', component:ServicesComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'blog', component:BlogComponent},
    {path:'contact', component:ContactComponent},
    {path:'**', component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent,AboutComponent,ServicesComponent,ProjectsComponent,BlogComponent,ContactComponent,PnfComponent]