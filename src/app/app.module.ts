import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from './layout';
import {MatIconModule} from '@angular/material/icon';
import {DocumentEditorModule} from '@txtextcontrol/tx-ng-document-editor';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ConfirmedPdfComponent } from './modules/confirmed-pdf/confirmed-pdf/confirmed-pdf.component';
import { CreatePdfComponent } from './modules/create-pdf/create-pdf.component';
import { HomePageComponent } from './modules/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmedPdfComponent,
    CreatePdfComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule, MatIconModule, DocumentEditorModule, FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

