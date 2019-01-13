import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keephtml'
})
export class KeephtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
