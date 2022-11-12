import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent //Porque lo vamos a usar fuera de este archivo tambien
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
