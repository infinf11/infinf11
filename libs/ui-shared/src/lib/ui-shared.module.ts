//import { StoreFeatureGameDetailModule } from './../../../store/feature-game-detail/src/lib/store-feature-game-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent, UiSharedModule,
  ],
})
export class UiSharedModule {}
