import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from '../material.module';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsComponent } from './hotels/hotels.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContractsComponent } from './contracts/contracts.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [ 
    AppComponent,
    NavComponent,
    HotelsComponent,
    ContractsComponent,
    ReservationComponent, 
  ],
  imports: [
    BrowserModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
