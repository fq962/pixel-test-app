import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaQueHaceresComponent } from './components/lista-que-haceres/lista-que-haceres.component';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG Modules
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent, ListaQueHaceresComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
