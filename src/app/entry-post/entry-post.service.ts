import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Entry} from "./entry";

@Injectable()
export class EntryPostService {

  constructor(private af: AngularFire) {}

  addNewEntry(newEntry: Entry): void {
    this.af.database.list('/posts')
        .push(newEntry);
  }

}
