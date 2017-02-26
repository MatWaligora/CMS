import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {ContentComponent} from "./content/content.component";
import {PostCardComponent} from "./content/post-card/post-card.component";
import {PostCardContentComponent} from "./content/post-card/post-card-content/post-card-content.component";
import {PostCardFooterComponent} from "./content/post-card/post-card-footer/post-card-footer.component";
import { TextLimiterPipe } from './content/text-limiter.pipe';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LandingComponent,
    ContentComponent,
    PostCardComponent,
    PostCardContentComponent,
    PostCardFooterComponent,
    TextLimiterPipe
  ]
})
export class LandingModule { }
