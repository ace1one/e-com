import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = false;
  formValue!:FormGroup;
  constructor(private authService:AuthService,
    private fb:FormBuilder
  ){
    this.initializeForm()
  }

  initializeForm(){
    this.formValue = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  login(){
    if(this.formValue.invalid){
      return;
    }
    this.authService.login(this.formValue.value).subscribe(res=>{
      console.log(res)
    })
  }
  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
