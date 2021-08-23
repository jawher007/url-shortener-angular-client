import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageRedirectComponent } from "./components/page-redirect/page-redirect.component";
import { DirectionComponent } from "./direction/direction.component";

const routes: Routes = [
  { path: "done/:id", component: PageRedirectComponent },
  { path: "direction", component: DirectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
