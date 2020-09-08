import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

const routes: Routes = [
    {
		//path: '',
		//pathMatch: 'full',
		//component: HeaderComponent
	},
	{
		//path: 'relatorio',
		//component: FooterComponent,
		//data: { nome: 'limite' }
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 