import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//Importar nustros nuevos Modulos
import { ModuloEmailModule } from "./moduloemail/moduloemail.module";
import { AdminModule } from './admin/admin.module';

//components
import { AppComponent } from './app.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';

import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    SimpleTinyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
