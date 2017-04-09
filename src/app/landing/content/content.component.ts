import { Component, OnInit } from '@angular/core';
import {Entry} from "../../entry-post/entry";
import {EntryPostService} from "../../entry-post/entry-post.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  posts: Entry[];

  constructor(private postService: EntryPostService) { }

  ngOnInit() {
    this.postService.posts.subscribe(posts => this.posts = posts);
  }

}
