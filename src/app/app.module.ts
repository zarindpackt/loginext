import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostcodeComponent } from "./postcode/postcode.component";
import { FakeBackendInterceptor } from "./shared/interceptors/fake-backend";
import { FilterPipe } from "./shared/pipes/filter.pipe";
import { FormsModule } from "@angular/forms";
import { GooglemapsComponent } from "./googlemaps/googlemaps.component";

@NgModule({
  declarations: [
    AppComponent,
    PostcodeComponent,
    FilterPipe,
    GooglemapsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
