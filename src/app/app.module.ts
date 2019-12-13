import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { SuiModule, SuiModalService, SuiCheckboxModule } from 'ng2-semantic-ui';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { DisclaimerService } from './disclaimer.service';
import { StudyAreaComponent } from './study-area/study-area.component';
import { MapboxViewComponent } from './mapping/mapbox-view/mapbox-view.component';
import { HomeComponent } from './home/home.component';

import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ExternalApiComponent } from './external-api/external-api.component';

import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { MetricsComponent } from './metrics/metrics.component';

/* Localhost development */
const config: SocketIoConfig = { url: 'http://localhost:5050', options: {} };

/* Production */
// const config: SocketIoConfig = { url: 'https://dss.cloud.bushfirebehaviour.net.au/', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,

    CallbackComponent,
    ProfileComponent,
    LogoutComponent,
    ExternalApiComponent,

    MapboxViewComponent,
    StudyAreaComponent,
    AboutComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SuiModule,
    SocketIoModule.forRoot(config),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYW50aG9ueXJhd2xpbnN1b20iLCJhIjoiY2o1dm81NTIwMDN6MTJxbjlvOHBiNHdlOSJ9.lt8I4sU0ceA6N8Tnnmx2ig', // Optionnal, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1IjoiYW50aG9ueXJhd2xpbnN1b20iLCJhIjoiY2o1dm81NTIwMDN6MTJxbjlvOHBiNHdlOSJ9.lt8I4sU0ceA6N8Tnnmx2ig' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [
    DisclaimerService,
    SuiModalService,
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
