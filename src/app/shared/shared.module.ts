import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AddCommasPipe } from './pipes/add-commas.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

const modules = [
  CommonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  RouterModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules,
    AddCommasPipe,
    EllipsisPipe
  ],
  declarations: [
    AddCommasPipe,
    EllipsisPipe
  ]
})
export class SharedModule { }
