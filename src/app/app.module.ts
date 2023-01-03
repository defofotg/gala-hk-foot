import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
