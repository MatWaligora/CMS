import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {Entry} from "./entry-post/entry";

@Injectable()
export class PostsService {

  constructor(private af: AngularFire) {}

  getAllPosts(): Observable<Entry[]> {
    return this.af.database.list('/posts');
  };

}
