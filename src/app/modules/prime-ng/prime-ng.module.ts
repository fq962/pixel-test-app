import { NgModule } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [
    InputTextModule,
    DividerModule,
    CheckboxModule,
    ListboxModule,
    ButtonModule,
  ],
})
export class PrimeNgModule {}
