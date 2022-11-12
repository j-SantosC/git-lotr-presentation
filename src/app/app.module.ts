import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BilboComponent } from './pages/bilbo/bilbo.component';
import { FrodoComponent } from './pages/frodo/frodo.component';
import { GandalfComponent } from './pages/gandalf/gandalf.component';
import { GimliComponent } from './pages/gimli/gimli.component';
import { SauronComponent } from './pages/sauron/sauron.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GimliComponent,
    FrodoComponent,
    GandalfComponent,
    SauronComponent,
    BilboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
