import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CurrentPriceComponent, HistoryPriceComponent } from './modules/bitcoin-module/components/bitcoin.collection';
import { BitcoinRoutingModule } from './modules/bitcoin-module/bitcoin-routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
    //{ path: 'login', component: LoginComponent },
    {
        path: '', component: AppComponent,
        loadChildren: 'app/modules/page-module/page.module#PageModule',
        //canActivate: [LoginGuard]
    },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
