import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'access_token';

  login(username: string, password: string) {
    // mock login (replace with API later)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.TOKEN_KEY, 'FAKE_JWT_TOKEN');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
