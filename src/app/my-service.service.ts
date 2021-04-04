import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {GitUser} from './git-user';
import {SearchUserComponent} from './search-user/search-user.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  user: GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=440368b309a63cfe86e7';

  constructor(private http: HttpClient) {
  }

  searchMyUser(searchTerm: string) {
    // tslint:disable-next-line:class-name
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followers: string;
      public_repos: string;
    }

    return new Promise<void>((resolve, reject) => {
      this.user = [];
      // tslint:disable-next-line:max-line-length
      this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
        (results) => {
          // @ts-ignore
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
  }
}
