import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';

const components = [LoginComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [...components, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class ComponentsModule {}