import {Component, OnInit} from '@angular/core';
import {Comments} from "../comment";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  comments: Comments[] = [];

  constructor(public commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe((data: Comments[]) => {
      this.comments = data;
      console.log(this.comments);
    })
  }

  deleteComment(id: number) {
    this.commentService.delete(id).subscribe(res => {
      this.comments = this.comments.filter(item => item.id !== id);
      console.log('Comments deleted successfully!');
    })
  }

}
