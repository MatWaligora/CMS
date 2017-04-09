import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Entry} from "./entry";

@Injectable()
export class EntryPostService {
  posts: Observable<Entry[]> = Observable.of([]);
  constructor(private af: AngularFire) {
    this.posts = this.af.database.list('/posts');
  }
  addNewEntry(newEntry: Entry): void {
    this.af.database.list('/posts')
        .push(newEntry);
  }

}
