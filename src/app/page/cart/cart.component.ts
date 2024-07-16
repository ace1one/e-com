import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomIcons } from '../../components/icons/icons';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  formValue!:FormGroup
  items = [
    { id: 1, name: 'Green Leaf-131 Wireless Bluetooth Earbuds | 27 Hours | HD Voice | Stereo Sound | 12mm Drive | Big', price: 1299, discountPrice: 1999, discount: -35, qty: 1,check:true },
    { id: 2, name: 'Blue Wave-201 Noise Cancelling Headphones | 30 Hours | Deep Bass | Comfortable Fit', price: 2999, discountPrice: 3999, discount: -25, qty: 1,check:true },
    { id: 3, name: 'Red Sound-301 Portable Bluetooth Speaker | 12 Hours | Waterproof | High Fidelity', price: 1599, discountPrice: 2499, discount: -36, qty: 1 ,check:true},
    { id: 4, name: 'Black Box-401 Home Theater System | 100W | Dolby Atmos | Wireless Subwoofer', price: 4999, discountPrice: 6999, discount: -28, qty: 1,check:true }
  ];
  constructor(private iconLibraries: NbIconLibraries,
    private fb:FormBuilder) {
    this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);

    this.formValue = this.fb.group({
      allChecked: [true],
     items:this.fb.array(this.items.map(item=> this.createItemFormGroup(item)))
    })
  }

  ngOnInit(): void {
    this.calculate()
  }
  createItemFormGroup(item:any):FormGroup{
    return this.fb.group({
      id:item.id,
      name:item.name,
      qty:item.qty,
      price:item.price,
      discountPrice: item.discountPrice,
      discount: item.discount,
      check:item.check
    })
  }

  get itemsFormArray(): FormArray {
    return this.formValue.get('items') as FormArray;
  }

  increaseQty(index: number) {
    const control = this.itemsFormArray.at(index).get('qty') as FormControl;
    control.setValue(control.value + 1);
  }

  descreaseQty(index: number) {
    const control = this.itemsFormArray.at(index).get('qty') as FormControl;
    if(control.value <= 1){
      return
    }else{
      control.setValue(control.value - 1);
    }
   
  }

  isAllChecked:boolean = false
  checkAll(checked:boolean){
   // this.allChecked = checked
 // const isAllItemCheck =   this.items.every(item=> item.check)
    console.log(checked)
    this.itemsFormArray.controls.forEach(item=>{
      item.get('check')?.setValue(checked)
    })
  }

  toggleItemCheck(checked:boolean,index:number){
    console.log(this.itemsFormArray.controls)
 this.itemsFormArray.controls.map(item=>console.log(item.get('check')?.value))
  console.log(this.isAllChecked)
  this.calculate()
  }

  subTotal:number = 0.00;
  deliveryCharge:number= 150;
  total:number = 0.00
  voucherDiscount = 0
  totalCount:number = 0
  calculate(){
    // const itemSubTot = value.filter(e => e.package_id == null)
    // .map(t => t.rate * t.quantity).reduce((acc, value) => acc + value, 0);
     this.subTotal = this.itemsFormArray.controls.map(item=>item.get('price')?.value * item.get('qty')?.value)
     .reduce((acc,value)=>acc+ value,0)
    console.log(this.subTotal)

    this.total =  (this.subTotal + this.deliveryCharge ) - this.voucherDiscount
    this.totalCount = this.itemsFormArray.controls.filter(item=> item.get('check')?.value === true).length
  }

}
