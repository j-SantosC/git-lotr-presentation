import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilboComponent } from './pages/bilbo/bilbo.component';
import { FrodoComponent } from './pages/frodo/frodo.component';
import { GandalfComponent } from './pages/gandalf/gandalf.component';
import { GimliComponent } from './pages/gimli/gimli.component';
import { SauronComponent } from './pages/sauron/sauron.component';

const routes: Routes = [
  { path: 'gimli', component: GimliComponent },
  { path: 'frodo', component: FrodoComponent },
  { path: 'gandalf', component: GandalfComponent },
  { path: 'bilbo', component: BilboComponent },
  { path: 'sauron', component: SauronComponent },
  { path: '', component: GimliComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
