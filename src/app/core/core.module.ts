import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    NavPanelComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavPanelComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
