// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UiSharedModule } from './../../../../libs/ui-shared/src/lib/ui-shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
            import('@bg-hoard/store/feature-game-detail').then(
              (module) => module.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    UiSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
