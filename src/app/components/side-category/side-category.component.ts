import { Component, OnInit } from '@angular/core';
import { category, CategoryService } from '../../services/category.service';

@Component({
  selector: 'ecom-side-category',
  templateUrl: './side-category.component.html',
  styleUrl: './side-category.component.scss'
})
export class SideCategoryComponent implements OnInit {

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
constructor(private categoryService:CategoryService){}

ngOnInit(): void {
 this.category()
}
categoryList!:category[]

category(){
  this.categoryService.getCategory().subscribe((res:category[])=>{
    this.categoryList =  res;
  })
}

}
