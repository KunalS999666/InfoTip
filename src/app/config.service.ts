import { Injectable } from '@angular/core';
import {configuration} from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
config=configuration;
  constructor() { }
  getConfig(){
    return this.config;
  }

  toHTML(input) : any {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
}
}
