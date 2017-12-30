import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { NotFoundComponent } from '../../shared/components/collection';

const routes: Routes = [
    {
        path: '', component: PageComponent
    },
    {
        path: 'bitcoin', component: PageComponent,
        loadChildren: 'app/modules/bitcoin-module/bitcoin-module#BitcoinModule'
    },
    {
        path: 'manage', component: PageComponent,
        loadChildren: 'app/modules/manage-module/manage-module#ManageModule'
    },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PageRoutingModule { }