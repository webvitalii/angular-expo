import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wrapper'
})
export class WrapperPipe implements PipeTransform {
    transform(value: string, before: string = '', after: string = ''): string {
        return `${before}***${value}***${after}`;
    }
}
