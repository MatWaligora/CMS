import {Component, Input, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";
import {ActivatedRoute} from "@angular/router";
import {Entry} from "../entry";

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.scss']
})
export class ViewEntryComponent implements OnInit {
  post: Entry;
  constructor(private af: AngularFire, private ar: ActivatedRoute) {
    console.log('/posts/' + this.ar.snapshot.params['key'])
    af.database.object('/posts/' + this.ar.snapshot.params['key']).subscribe((post) => {
      this.post = post;
      console.log(post);
    });
  }

  ngOnInit() {

  }
}
