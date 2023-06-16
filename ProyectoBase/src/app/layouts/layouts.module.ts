import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        MainComponent,
        ContentComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        MainComponent
    ]
})
export class LayoutsModule { }