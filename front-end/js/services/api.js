class API {
  static headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  static options = {
    credentials: "include"
  }
  static baseURL = "http://localhost:3000/api/v1"

  // sends body object to url and returns a promise parsed to json string
  static post(url, body) {
    return fetch(this.baseURL + url, {
      method: "POST",
      headers: this.headers,
      ...this.options,
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
  }

  static get(url) {
    return fetch(this.baseURL + url, {
      method: "GET",
      headers: this.headers,
      ...this.options
    })
    .then(resp => resp.json())
  }

  static delete(url) {
    return fetch(this.baseURL + url, {
      method: "DELETE",
      headers: this.headers,
      ...this.options
    })
    .then(resp => resp.json())
  }
}