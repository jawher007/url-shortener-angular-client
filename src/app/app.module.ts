import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UrlService } from "./services/url.service";
import { PageRedirectComponent } from "./components/page-redirect/page-redirect.component";
import { HttpClientModule } from "@angular/common/http";
import { DirectionComponent } from "./direction/direction.component";

@NgModule({
  declarations: [AppComponent, PageRedirectComponent, DirectionComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UrlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
