import { Component } from '@angular/core';
//import { Post } from '../../../models/post';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  // post: Post = {
  //   id: 0,
  //   userId: 0,
  //   title: '',
  //   body: ''
  // }
  // submitData(frm: NgForm) {
  //   console.log(this.post);
  //   //console.log(frm.form.controls['userId']);
  // }

  addFrm: FormGroup;

  constructor(private builder: FormBuilder) {
    // this.addFrm = new FormGroup({
    //   id: new FormControl(0),
    //   userId: new FormControl(0),
    //   title: new FormControl('enter title'),
    //   body: new FormControl('enter post')
    // })
    this.addFrm = this.builder.group({
      id: [0],
      userId: [0],
      title: ['enter title'],
      body: ['enter post']
    })
  }
  submitData() {
    console.log(this.addFrm.value);
    /**
     *  body: "this helps to handle form data easily"
        id: 101
        title:"reactive form"
        userId:10
     */

    //console.log(this.addFrm.get('id'));
  }
}
