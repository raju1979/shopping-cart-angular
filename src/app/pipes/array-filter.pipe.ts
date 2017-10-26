import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filteredArray =  (value.filter(item => item.gender.toUpperCase() == args.toUpperCase()))
    console.log(filteredArray)
    return filteredArray;
  }

}
