import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Client } from "../_models/client";



@Injectable()
export class ClientService {
    private readonly apiUrl:string="https://ramisuliman.ru/api/reset"  
    constructor(private http:HttpClient) {
    }


    getAllClients() {
        return this.http.get<Client[]>(`${this.apiUrl}/list`, {
        });
      }

    createClient(client: Client) {
        return this.http
          .post(`${this.apiUrl}/register`, client, {
         
          })
    }

}