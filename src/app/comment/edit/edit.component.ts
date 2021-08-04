import {Component, OnInit} from '@angular/core';
import {Comments} from "../comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../comment.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  comment: Comments;
  // @ts-ignore
  form: FormGroup

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
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.commentService.update(this.id, this.form.value).subscribe(
      res => {
        console.log('Comment updated successfully!');
        this.router.navigateByUrl('comment/index');
      })
  }

}
