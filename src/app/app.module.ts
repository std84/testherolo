import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule}    from '@angular/forms';


import { AppComponent } from './app.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
   entryComponents: [
    FormModalComponent,
    DeleteModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
