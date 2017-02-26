import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPost(key) {
    console.log('/post', key);
    this.router.navigate(['/post', key])
  }
}
