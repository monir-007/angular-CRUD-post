import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommentService} from "../comment.service";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(
    public commentService: CommentService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      // postId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.commentService.create(this.form.value).subscribe(res => {
      console.log('Comment created successfully!');
      this.router.navigateByUrl('comment/index');
    })
  }

}
