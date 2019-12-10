import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http"; 
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { flight , user} from "../model/flight.model";
import { xml2js } from "xml2js";

const endpoint = "https://www.latlong.net/search.php?keyword=";


@Injectable()
export class ReadService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;

    const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(xmlString, (err, result) => {
      this.xml = result;
    });
    return body || {};
  }
  getCityLocation(cityName: string ): Observable<any> {
    var ele: flight;

    return this.http.get(endpoint + ""+cityName).pipe(map(this.extractData));

   }
}