import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';

import { AuthHttpService } from './auth.http.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './models/user.model';
import { AuthModel } from './models/auth.mode';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  readonly resetPasswordUrl = `${environment.apiUrl}/v1/password/submit-reset-password`;

  private unsubscribe: Subscription[] = []
  private authLocalStorageToken = 'loggedInUser';

  currentUser$: Observable<UserModel | undefined >;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserModel>;
  isLoadingSubject: BehaviorSubject<boolean>;  
 




  get currentUserValue(): UserModel  | undefined {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserModel) {
    this.currentUserSubject.next(user);
  }

  

  constructor(
    private authHttpService: AuthHttpService,
    private router: Router,
    private http: HttpClient

  ) {
  

    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<any>(undefined);


    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();



  }


  login(email: string, password: string): Observable<UserModel> {
    this.isLoadingSubject.next(true);

    return this.authHttpService.login(email, password).pipe(
      map(response => {
        const auth: AuthModel = response.body;
        console.log(auth)
        if (auth && auth.authToken) {
          this.saveAuthToLocalStorage(auth);
          return true;
        }
        return false; 
      }),
      switchMap(()=> this.getUserByToken()),
      catchError(() => {
        return of(false); 
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }



  getUserByToken(): Observable<any>{
   const getlocalStorage = localStorage.getItem(this.authLocalStorageToken)
    const auth = getlocalStorage ? JSON.parse(getlocalStorage) : null;
    if(!auth || !auth.authToken){
      return of(undefined)
    }
    this.isLoadingSubject.next(true);
    return  this.authHttpService.getUserByToken(auth).pipe(
      map((user:UserModel)=>{
        if(user){
          this.currentUserSubject = new BehaviorSubject<UserModel>(user);
        }else{
          this.logout()
        }
        return user;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    )

  }

  private saveAuthToLocalStorage(auth: AuthModel): void {
    console.log(auth)
    localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
    localStorage.setItem('jwt', auth.authToken);
    console.log( localStorage.getItem(this.authLocalStorageToken))
  }



  isAuthenticated(): boolean {
    const auth = localStorage.getItem(this.authLocalStorageToken);
    return !!auth;
  }



  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    localStorage.removeItem("jwt");
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }



  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
