import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './IEmployee';
import EmployeeJson from './employees.json';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private _http: HttpClient) { }

  private _url = './employees.json';

  getEmployees() {
    return this._http.get<IEmployee[]>(this._url);
  }

  getEmployeesJson() {
    return EmployeeJson as IEmployee[];
  }
}
