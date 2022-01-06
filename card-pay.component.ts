import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-pay',
  templateUrl: './card-pay.component.html',
  styleUrls: ['./card-pay.component.css']
})
export class CardPayComponent {

  title = 'checkout';
  SeatsForm = new FormGroup({
    seats : new FormControl('',[Validators.required,]),
    
  })

  constructor(){}

  getUserFormData(data: any)
  {

  }

  get seats_valid()
  {
    return this.SeatsForm.get('seats');
  }
  
 
  

}

