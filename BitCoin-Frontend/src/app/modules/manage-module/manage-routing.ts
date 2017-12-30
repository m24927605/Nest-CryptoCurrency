import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent,ChangePasswordComponent } from './components/manage.collection';

const routes: Routes = [
    { path: 'personDetail', component: PersonDetailComponent },
    { path: 'changePassword', component: ChangePasswordComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManageRoutingModule { }
