import {Component, OnInit} from '@angular/core';
import {Comments} from "../comment";
import {CommentService} from "../comment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  comment: Comments;

  constructor(
    public commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.commentService.find(this.id).subscribe((data: Comments) => {
      this.comment = data;
    });
  }
}
