import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from "@angular/forms";
import {EntryPostService} from "../entry-post.service";

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  entryForm: FormGroup;
  ckeditorContent: any = 'test';

  constructor(private formBuilder: FormBuilder,
              private eps: EntryPostService) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'tag': [''],
      'tags': this.formBuilder.array([])
    });
  }

  addNewTag(): void {
    const tagsControl = this.entryForm.controls['tags'] as FormArray;
    tagsControl.controls.push(new FormControl(this.entryForm.controls['tag'].value));
    this.entryForm.controls['tag'].reset();
  }

  removeTag(index): void {
    const tagsControl = this.entryForm.controls['tags'] as FormArray;
    tagsControl.removeAt(index);
  }

  onSubmit(content): void {
    //noinspection TypeScriptUnresolvedVariable
    let entry = {
      title: this.entryForm.value.title,
      content: content,
      tags: []
    };
    const tagsControl = this.entryForm.controls['tags'] as FormArray;
    entry.tags = tagsControl.controls.map((item: FormControl) => item.value);;
    this.eps.addNewEntry(entry);
  }

}
