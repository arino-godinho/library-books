import { NgModule } from '@angular/core';

import { AuthGuard } from './../core/guards/auth.guard';
import { AuthService } from './../core/services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginModule { }
