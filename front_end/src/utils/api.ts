import type UserRo from "./types/userRo";

export default class Api {

  private rootUrl: string;
  private headers: HeadersInit;

  constructor() {
    const mode = import.meta.env.VITE_MODE;
    const port = import.meta.env.VITE_API_PORT;
    const host = mode === "prod" ? "nas.local" : "127.0.0.1";

    this.rootUrl = 'https://' + host + ':' + port + '/';
    this.headers = {'Content-Type': 'application/json'};
  }

  async getLastConnectionDate(): Promise<UserRo | undefined> {
    try {
      const response = await fetch(this.rootUrl + 'user', {
        method: 'GET',
        headers: this.headers,
      })
      if (response.status == 200) {
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
    return response.status;
  }

}