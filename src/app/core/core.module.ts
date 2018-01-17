import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiBooksService } from './services/api-books.service';
import { CollectionService } from './services/collection.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    ApiBooksService,
    CollectionService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
