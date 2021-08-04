import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PostModule} from "./post/post.module";
import {CommentModule} from "./comment/comment.module";
import { IndexComponent } from './homepage/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    CommentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
