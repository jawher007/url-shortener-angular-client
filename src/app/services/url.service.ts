import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, retry, catchError } from "rxjs/operators";
import { Url } from "../model/url";

@Injectable({
  providedIn: "root",
})
export class UrlService {
  serverUrl = "http://localhost:21929/api/Link";
  api =
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=42df969e54a44fdf9de110d27c060dbc";
  apiV2 = "../assets/data.json";
  constructor(private http: HttpClient) {}

  findById(id: number | string): Observable<Url> {
    return this.http
      .get<Url>(this.serverUrl + "/getById/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  save(link: Url): Observable<Url> {
    return this.http.post<Url>(`${this.serverUrl}/saveoriginalUrl`, link);
  }

  handleError(error) {
    let errorMessage = `Error: ${error.error.message}`;

    window.alert(errorMessage);

    return throwError(errorMessage);
  }

  newsApi(): Observable<any> {
    return this.http.get(this.api);
  }

  fetchApi(): Observable<any> {
    return this.http.get(this.apiV2);
  }
}
