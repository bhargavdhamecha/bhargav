import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ContactRequest, ContactResponse } from '../models/contact.model';

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);

  send(payload: ContactRequest): Observable<ContactResponse> {
    const body = encodeFormData({ 'form-name': 'contact', ...payload });
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http
      .post('/', body, { headers, responseType: 'text' })
      .pipe(map(() => ({ success: true, message: 'Message sent.' })));
  }
}
