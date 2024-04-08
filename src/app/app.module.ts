import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SelectionComponent } from "./selection/selection.component";
import { AppRoudingModule } from "./app-routing.module";
import { BrowseCardsComponent } from "./browse-cards/browse-cards.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { app } from "../../server";
import { WalletComponent } from "./wallet/wallet.component";
import { ComparisionComponent } from "./comparision/comparision.component";





@NgModule({
  declarations: [AppComponent, HomeComponent, SelectionComponent,BrowseCardsComponent, WalletComponent,ComparisionComponent],
  imports: [BrowserModule,AppRoudingModule,HttpClientModule,RouterModule],
  providers: [],
})
export class AppModule {}