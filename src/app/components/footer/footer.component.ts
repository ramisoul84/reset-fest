import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,ReactiveFormsModule,LottieComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  wavesOptions: AnimationOptions = {
    path: 'assets/animations/waves.json',
    loop:true,
  };
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', ],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  onSubmit() {
  }
}
