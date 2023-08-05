import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yearFormat',
})
export class YearFormatPipe implements PipeTransform {
    transform(date: Date): string {
        return date.getFullYear().toString();
    }
}