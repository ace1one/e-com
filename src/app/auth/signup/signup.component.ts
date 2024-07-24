import { Component } from '@angular/core';
import { gender } from '../../constant';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthHttpService } from '../../services/auth/auth.http.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

gender= gender;
loading = true;
showPassword = false;
showConfirmPassword = false;
formValue!: FormGroup

constructor(private signupService:AuthHttpService,
  private fb:FormBuilder
){
  this.inititlizeForm()
}




inititlizeForm(){
 this.formValue =  this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirm_password:['',[Validators.required]],
    phone_number:['',Validators.required],
    gender:['',Validators.required]
  })
}
signup(){
  if(this.formValue.invalid){
    return;
  }

    console.log(this.formValue.value);
    this.signupService.signup(this.formValue.value).subscribe(res => {
      console.log(res);
    });
 
}

getInputType() {
  if (this.showPassword) {
    return 'text';
  }
  return 'password';
}

getConfirmInputType(){
  if (this.showConfirmPassword) {
    return 'text';
  }
  return 'password';
}

toggleShowPassword() {
  this.showPassword = !this.showPassword;
}

toggleConfirmPassword() {
  this.showConfirmPassword = !this.showConfirmPassword;
}
}
