import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //check sessions
    // if logged in
    //return true;
    //else 
    //return false;
    
    return true;

    /*if () {
        this.router.navigate(['/dashboard']);
        return true;
    }
    else {
        this.router.navigate(['/Login']);
    }
    return false; */
  }
}
