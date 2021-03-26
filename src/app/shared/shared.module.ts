import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  exports: [ComponentsModule],
})
export class SharedModule {}