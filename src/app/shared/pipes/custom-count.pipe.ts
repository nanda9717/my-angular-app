import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCount',
  standalone: true
})
export class CustomCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.length;
  }

}
