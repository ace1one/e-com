import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  showPassword = false;
  formValue!:FormGroup;
  returnUrl!: string;
  constructor(private authService:AuthService,
    private fb:FormBuilder,private router: Router,
    private route: ActivatedRoute,
  ){
    this.initializeForm();
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '';
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
    const email = this.formValue.get('email')?.value;
    const password = this.formValue.get('password')?.value
    this.authService.login(email,password).subscribe(res=>{
      if(res){
        console.log(res)
        console.log(this.returnUrl)
        this.router.navigate([this.returnUrl])
      }else{
        localStorage.removeItem('jwt');
        localStorage.removeItem('loggedInUser');
      }
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
