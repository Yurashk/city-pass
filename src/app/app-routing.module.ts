import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfirmedPdfComponent} from './modules/confirmed-pdf/confirmed-pdf/confirmed-pdf.component';
import {CreatePdfComponent} from './modules/create-pdf/create-pdf.component';
import {HomePageComponent} from './modules/home-page/home-page.component';

const routes: Routes = [
  {path: 'create-pdf', component: CreatePdfComponent},
  {path: '', component: HomePageComponent},
  {path: 'validate-pdf', component: ConfirmedPdfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
