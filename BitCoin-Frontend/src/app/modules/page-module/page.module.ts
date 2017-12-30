import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { SideMenuComponent,HeaderComponent } from '../../shared/components/collection';

@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        PageComponent,
        SideMenuComponent,
        HeaderComponent
    ],
    providers: [],
    exports: []
})
export class PageModule { }