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


import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/redux/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/redux/auth.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    SystemModule,
    StoreModule.forRoot({ user: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
   !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    UserService,
    ConfigService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
