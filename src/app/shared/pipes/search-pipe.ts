import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true // لو بتستخدم Angular standalone components
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], value: string): any[] {
    if (!arr || !value) return arr; // لو مفيش قيمة للبحث رجّع المصفوفة الأصلية

    value = value.toLowerCase();
    return arr.filter(item => 
      item.title?.toLowerCase().includes(value)
    );
  }
}
