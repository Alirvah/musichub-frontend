export default class TokenStorage {
  static isAuthenticated() {
    return this.getToken() !== null;
  }

  static clear() {
    localStorage.removeItem('token');
  }

  static setToken(token) {
    return localStorage.setItem('token', JSON.stringify(token));
  }

  static getToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token && token.access;
  }
}
