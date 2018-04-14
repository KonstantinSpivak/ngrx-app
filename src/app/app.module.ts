import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './shared/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './shared/service/config.service';
import { AuthService } from './shared/service/auth.service';
import { SystemModule } from './system/system.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    SystemModule

  ],
  providers: [
    UserService,
    ConfigService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
