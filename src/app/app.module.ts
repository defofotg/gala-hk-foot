import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [AppComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ServiceModule,
    TopBarModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      closeButton: true,
      progressBar: true,
    }),
  ],
})
export class AppModule {}
