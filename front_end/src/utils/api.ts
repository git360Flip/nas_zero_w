import type { FilesRo } from "./types/filesRo";
import type UserRo from "./types/userRo";

export default class Api {

  private rootUrl: string;
  private headers: HeadersInit;

  constructor() {
    const mode = import.meta.env.VITE_MODE;
    const port = import.meta.env.VITE_API_PORT;
    const host = mode === "prod" ? "nas.local" : "127.0.0.1";
    const token = localStorage.getItem('token') ?? ''

    this.rootUrl = 'https://' + host + ':' + port + '/';
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': token,
    };
  }

  async getLastConnectionDate(): Promise<UserRo | undefined> {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)
      const response = await fetch(this.rootUrl + 'user', {
        method: 'GET',
        headers: this.headers,
      })
      clearTimeout(timeoutId)
      if (response.status === 200) {
        return await response.json() as UserRo;
      }
    } catch {
      return undefined;
    }
  }

  async login(pinCode: string): Promise<number> {
    const response = await fetch(this.rootUrl + 'user/login', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({password: pinCode})
    })
    if (response.status === 200) {
      const token = response.headers.get("authorization");
      if (token != null) {
        localStorage.setItem('token', token)
        this.headers = {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      }
    }
    return response.status;
  }

  async logout() {
    await fetch(this.rootUrl + 'user/logout', {
      method: 'POST',
      headers: this.headers,
    })
    localStorage.removeItem('token')
    this.headers = {'Content-Type': 'application/json'};
  }

  async getFiles(path: string): Promise<FilesRo | undefined> {
    const response = await fetch(this.rootUrl + 'file?diskPath=' + path, {
      method: 'GET',
      headers: this.headers,
    })
    if (response.status === 200) {
      return await response.json() as FilesRo;
    }
    return undefined
  }

}