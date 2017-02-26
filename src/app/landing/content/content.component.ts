import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../posts.service";
import {Entry} from "../../entry-post/entry";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  posts: Entry[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getAllPosts()
        .subscribe(posts => {
          console.log(posts);
          this.posts = posts
        });
  }

}
