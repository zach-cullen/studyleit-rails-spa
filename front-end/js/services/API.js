class API {
  static options = {
    "ContentType": "application/json",
    "Accept": "application/json"
  }
  static baseURL = "http://localhost:3000/api/v1"

  static post(url, body) {
    console.log(url, body)
    return fetch(this.baseURL + url, {
      method: "POST",
      headers: this.options,
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
}