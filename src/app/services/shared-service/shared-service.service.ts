import { Injectable } from '@angular/core';
import { Files } from 'src/app/interface/Files';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  imageUrl = 'http://localhost:3000';
  constructor() {}

  setItemLocalStorage(keyName: string, value: Files[]): void {
    localStorage.setItem(keyName, JSON.stringify(value));
  }

  getItemLocalStorage(keyName: string): Files[] {
    return localStorage.getItem(keyName)
      ? JSON.parse(localStorage.getItem(keyName) || '')
      : null;
  }

  setSessionStorage(keyName: string, value: Files[]): void {
    sessionStorage.setItem(keyName, JSON.stringify(value));
  }
}
