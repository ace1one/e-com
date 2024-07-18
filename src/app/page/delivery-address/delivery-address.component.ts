import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomIcons } from '../../components/icons/icons';

@Component({
  selector: 'ecom-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrl: './delivery-address.component.scss'
})
export class DeliveryAddressComponent {
  addressData = [
    {
      name: "John Doe", // Replace with a random name
      isDefault: true,
      phoneNumber: "9847542548",
      email: "ashim01kc@gmail.com",
      address: "Sankhamul, New Baneshwor Chowk, Bagmati Province"
    },
    {
      name: "Jane Smith", // Replace with another random name
      isDefault: false,
      phoneNumber: "9876543210",
      email: "janesmith@example.com",
      address: "123 Main Street, Anytown, Any Province, Any Province"
    },
    // {
    //   name: "Bob Johnson", // Replace with another random name
    //   isDefault: false,
    //   phoneNumber: "9867123456",
    //   email: "bob.johnson@example.com",
    //   address: "456 Elm Avenue, Somewhere City, Some Province"
    // },
    // {
    //   name: "Emily Brown", // Replace with another random name
    //   isDefault: false,
    //   phoneNumber: "9812345678",
    //   email: "emily.brown@example.com",
    //   address: "789 Oak Road, Another Place, Another Province"
    // }
  ];
  
  constructor(private iconLibraries: NbIconLibraries,) {
    this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);
    }


    onClickAddress(data:any,i:number){
      this.addressData.forEach((obj,index)=>{
        if(i === index){
          obj.isDefault = true
        }else{
          obj.isDefault = false
        }
      })
    }
}
