import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {

  static forbiddenUsernames(control: FormControl): {[key: string]: boolean} {
    const forbiddenUsernamesList = ['admin', 'user', 'test'];

    if (forbiddenUsernamesList.includes(control.value)) {
      return {forbiddenUsername: true}; // form control is invalid
    }
    return null; // form control is valid
  }

  static forbiddenEmailAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({forbiddenEmail: true}); // form control is invalid
        } else {
          resolve(null); // form control is valid
        }
      }, 3000);
    });
    return promise;
  }

}
