import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 
ngOnInit(): void {
  
}


hasArrow:boolean = false;
isArrow(isArrow:boolean){
  this.hasArrow = isArrow
}


arrowSide:string = ''
onClickArrow(event:string){
  console.log(event)
  this.arrowSide = event
}

}
