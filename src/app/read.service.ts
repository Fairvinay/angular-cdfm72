import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http"; 
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
//import { flight , user} from "../model/flight.model";
//import { xml2js } from "xml2js";

const endpoint = "https://www.latlong.net/search.php?keyword=";


@Injectable()
export class ReadService {
  constructor(private http: HttpClient) {}


 private extractHTMLData(res: Response) {
    let body = res;

    /*const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(res, (err, result) => {
      this.xml = result;
    });*/
    const parser = new DOMParser();
    const strRes = JSON.stringify(body);
       
    const doc = parser.parseFromString(strRes, "text/html");
    const values = [];

     const p = doc.getElementsByTagName("table");

   for (const item of Array.from(p)) {
        values.push(item.textContent);
    }    

    return body || {};
  }
  private extractData(res: Response) {
    let body = res;

    /*const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(res, (err, result) => {
      this.xml = result;
    });*/
    const parser = new DOMParser();
    const strRes = JSON.stringify(body);
       
    const doc = parser.parseFromString(strRes, "text/html");
    const values = [];

     const p = doc.getElementsByTagName("table");

   for (const item of Array.from(p)) {
        values.push(item.textContent);
    }    

    return values || {};
  }
  getCityLocation(cityName: string ): Observable<any> {
    

    return this.http.get(endpoint + ""+cityName).pipe(map(this.extractData));

   }
}