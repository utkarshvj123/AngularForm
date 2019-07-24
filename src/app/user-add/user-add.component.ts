import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  myForm:FormGroup;
  constructor(private route:Router,private form:FormBuilder,private service:UserService) { }




  ngOnInit() {
    this.myForm=this.form.group({
      name:['', Validators.required],
      age:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      phone:['',[Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(value){
    console.log(value.value);
    const sentValue={
      "auth_code":"test298",
      'user_name':value.name,
      'user_email':value.name,
      'user_age':value.name,
      'User_phone':value.name,
    }
    this.service.setUser(JSON.stringify(sentValue)).subscribe((res)=>{console.log(res);
    if(res.status === '1'){
      this.route.navigate(['user-list']);
    }else{
      console.log("Something went wrong");
    }
    })
  }

}
