import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: "filterxxxx",
   pure: false
})
export class ArrayFilterPipe implements PipeTransform {

   transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
       return items.filter(item => {
           for (let field in conditions) {     
               //alert(conditions[field]);  
               //alert(item[field]);         
               //if (item[field] !== conditions[field]) {
                   if (Number(item[field]) !== Number(conditions[field])) {
                   return false;
               }
           }
           return true;
       });
   }
}
