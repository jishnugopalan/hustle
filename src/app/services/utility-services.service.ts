import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServicesService {
  city:any;
  constructor(private http:HttpClient) { }

  public getCity(){

    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities",{
      "country":"India",
      "state":"Kerala"
    })

  }
  ngOnInit() {
    
  }
}
