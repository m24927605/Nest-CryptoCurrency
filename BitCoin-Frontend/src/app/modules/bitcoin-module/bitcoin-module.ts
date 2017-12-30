import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CurrentPriceComponent, HistoryPriceComponent } from './components/bitcoin.collection';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.modules';
import { BitcoinRoutingModule } from './bitcoin-routing';

@NgModule({
    imports: [BitcoinRoutingModule, SharedModule],
    exports: [],
    declarations: [CurrentPriceComponent, HistoryPriceComponent],
})
export class BitcoinModule { }