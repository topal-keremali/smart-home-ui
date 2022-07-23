import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {OnlineStatusModule} from 'ngx-online-status';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from './dashboard/dashboard.component';
import {KitchenComponent} from './rooms/kitchen/kitchen.component';
import {LivingRoomComponent} from './rooms/living-room/living-room.component';
import {DiningRoomComponent} from './rooms/dining-room/dining-room.component';
import {BathroomComponent} from './rooms/bathroom/bathroom.component';
import {BedroomComponent} from './rooms/bedroom/bedroom.component';
import {WorkspaceComponent} from './rooms/workspace/workspace.component';
import { DressingRoomComponent } from './rooms/dressing-room/dressing-room.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    KitchenComponent,
    LivingRoomComponent,
    DiningRoomComponent,
    BathroomComponent,
    BedroomComponent,
    WorkspaceComponent,
    DressingRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatTableModule,
    OnlineStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
