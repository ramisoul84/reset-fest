import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { Client } from '../../_models/client';
import { ClientService } from '../../_services/register';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,ReactiveFormsModule,LottieComponent],
  providers:[ClientService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  message: string = "";
  isMessageOpen:boolean = false;
  wavesOptions: AnimationOptions = {
    path: 'assets/animations/waves.json',
    loop:true,
  };
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private clientService:ClientService) {
    this.registerForm = this.fb.group({
      name: ['', ],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  onSubmit() {
    if (this.registerForm.valid) {
      const client: Client = {
        name: this.registerForm.controls['name'].value,
        email: this.registerForm.controls['email'].value,
      }
      this.clientService.createClient(client).subscribe({
        next: () => {
          this.message = client.email + ' has been added to mailling list!'
          this.isMessageOpen=true
          setTimeout(() => {
            this.message = '';
            this.isMessageOpen=false
          }, 3000)
          this.registerForm.reset();
        },       
        error: err => {
          this.message = err.error;
          this.isMessageOpen=true
          setTimeout(() => {
            this.message = '';
            this.isMessageOpen=false
          }, 3000); 
        } 
      });
  }
  }
}
