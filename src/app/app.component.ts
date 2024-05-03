import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { APIQuraan } from './quraan-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private service: APIQuraan, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      su: ['', [Validators.required]],
      ay: ['', [Validators.required]],
    });
  }
  title = 'TaskApp';
  form!: FormGroup;
  getay!: any;
  getTfAr!: any;
  getTfEn!: any;
  getdata() {
    this.service
      .getAyah(this.form.value['su'], this.form.value['ay'])
      .subscribe((data) => (this.getay = data['text']));
    this.service
      .getTafserArabic(this.form.value['su'], this.form.value['ay'])
      .subscribe((data) => (this.getTfAr = data['text']));
    this.service
      .getTafserEnglish(this.form.value['su'], this.form.value['ay'])
      .subscribe((data) => (this.getTfEn = data['text']));
  }
}
