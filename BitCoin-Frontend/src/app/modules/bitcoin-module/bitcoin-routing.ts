import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentPriceComponent, HistoryPriceComponent } from './components/bitcoin.collection';

const routes: Routes = [
    { path: 'currentPrice', component: CurrentPriceComponent },
    { path: 'historyPrice', component: HistoryPriceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BitcoinRoutingModule { }
