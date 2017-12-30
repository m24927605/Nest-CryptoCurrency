import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PersonDetailComponent,ChangePasswordComponent } from './components/manage.collection';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.modules';
import { ManageRoutingModule } from './manage-routing';

@NgModule({
    imports: [ManageRoutingModule, SharedModule],
    exports: [],
    declarations: [PersonDetailComponent,ChangePasswordComponent],
})
export class ManageModule { }