
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './selection/selection.component';
import { BrowseCardsComponent } from './browse-cards/browse-cards.component';
import { ComparisionComponent } from './comparision/comparision.component';
import { WalletComponent } from './wallet/wallet.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component:HomeComponent, },
    { path: 'selection', component: SelectionComponent },
    { path: 'home', component: HomeComponent },
    { path: 'browseCards', component: BrowseCardsComponent },
    { path: 'compare', component: ComparisionComponent },
    { path: 'wallet', component: WalletComponent },
];

export class AppRoudingModule{}
