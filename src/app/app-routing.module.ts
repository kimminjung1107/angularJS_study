import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  // heros 로 오면 HeroesComponent로 라우팅 해라.
  // path 아무것도 안오면 dashboard로 이동
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard',   component: DashboardComponent},
  {path: 'heros',       component: HeroesComponent},
  {path: 'detail/:id',  component: HeroDetailComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
