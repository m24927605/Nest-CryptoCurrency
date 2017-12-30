import { LoginComponent } from './components/login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';
import { DataAccessService, AuthService } from './services/collection';
import { HttpHelperService, CookieHelperService } from './helpers/collection';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './guards/login.guard';
import { NotFoundComponent } from './components/collection';

const modules = [
  HttpModule,
  HttpClientModule,
  FormsModule,
  CommonModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  MomentModule
];

const components = [
  LoginComponent,
  NotFoundComponent
];


const services = [
  AuthService,
  DataAccessService,
  HttpHelperService,
  CookieHelperService
];

const guards = [
  LoginGuard
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components,
  ],
  providers: [
    ...services,
    ...guards
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
