import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCheckboxModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule
  ], exports: [
    MatCheckboxModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: []
})
export class MaterialModule { }
