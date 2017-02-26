import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryPostComponent} from "./entry-post.component";
// import {EntryPostRoutingModule} from "./entry-post-routing.module";
import { NewEntryComponent } from './new-entry/new-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {EntryPostService} from "./entry-post.service";
import { ViewEntryComponent } from './view-entry/view-entry.component';
import {CKEditorModule} from "ng2-ckeditor";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    RouterModule

  ],
  declarations: [
      EntryPostComponent,
      NewEntryComponent,
      EditEntryComponent,
      ViewEntryComponent
  ],
    providers: [EntryPostService]
})

export class EntryPostModule { }
