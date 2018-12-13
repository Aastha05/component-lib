import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DocContainerComponent } from './components/doc-container/doc-container.component';
import { CodeContainerComponent } from './components/code-container/code-container.component';
import { DocBodyComponent } from './components/doc-body/doc-body.component';
import { ButtonComponent } from './pages/button/button.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DocContainerComponent,
    CodeContainerComponent,
    DocBodyComponent,
    ButtonComponent,
    CheckboxComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
