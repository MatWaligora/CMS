import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimiter'
})
export class TextLimiterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {
      let resultValue = value.split('').slice(0, 100).join('');
      if(resultValue.length >= 100) {
        resultValue += '...';
      }
      return resultValue;
    } else {
      return '';
    }
  }

}
