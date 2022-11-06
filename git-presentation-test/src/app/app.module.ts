import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterCardComponent } from './pages/home/components/character-card/character-card.component';
import { GimliComponent } from './pages/gimli/gimli.component';
import { FrodoComponent } from './pages/frodo/frodo.component';
import { GandalfComponent } from './pages/gandalf/gandalf.component';
import { SauronComponent } from './pages/sauron/sauron.component';
import { BilboComponent } from './pages/bilbo/bilbo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterCardComponent,
    GimliComponent,
    FrodoComponent,
    GandalfComponent,
    SauronComponent,
    BilboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
