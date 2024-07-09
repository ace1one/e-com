import { Component } from '@angular/core';

@Component({
  selector: 'ecom-side-category',
  templateUrl: './side-category.component.html',
  styleUrl: './side-category.component.scss'
})
export class SideCategoryComponent {

      permission= [
        {
          role: 'Koshi Province',
          isChecked: false
        },
        {
          role: 'Madesh Province',
          isChecked: false
        },
        {
          role: 'Bagmati Province',
          isChecked: false
        },
        {
          role: 'Gandaki Province',
          isChecked: false,
          hospitals:[
            {
              role: 'Lamgung Hospital',
              isChecked:false,
            },
            {
              role:'Gorkha Hospital',
              isChecked:false,
            }
          ]
        },
        {
          role: 'Lumbini Province',
          isChecked: false
        },
        {
          role: 'Karnali Province',
          isChecked: false
        },
        {
          role: 'Sudurpashchim Province',
          isChecked: false
        },
 
      ]


}
