import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LivingRoomComponent} from "./rooms/living-room/living-room.component";
import {DiningRoomComponent} from "./rooms/dining-room/dining-room.component";
import {KitchenComponent} from "./rooms/kitchen/kitchen.component";
import {BedroomComponent} from "./rooms/bedroom/bedroom.component";
import {DressingRoomComponent} from "./rooms/dressing-room/dressing-room.component";
import {WorkspaceComponent} from "./rooms/workspace/workspace.component";
import {BathroomComponent} from "./rooms/bathroom/bathroom.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'living-room', component: LivingRoomComponent},
  {path: 'dining-room', component: DiningRoomComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'bedroom', component: BedroomComponent},
  {path: 'dressing-room', component: DressingRoomComponent},
  {path: 'workspace', component: WorkspaceComponent},
  {path: 'bathroom', component: BathroomComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
