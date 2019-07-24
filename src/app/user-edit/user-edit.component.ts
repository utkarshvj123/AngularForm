import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  myForm:FormGroup;

  constructor(private form:FormBuilder,private service:UserService,private route:Router) { }
userId:any;
  ngOnInit() {
const detail=this.service.gettingDetailOnClick();
console.log(detail);

console.log(this.userId);
if(detail === undefined){
  this.route.navigate(['user-list']);
}else{
  this.userId=detail.user_id;
this.myForm=this.form.group({
  name:detail.user_name,
  age:detail.user_age,
  email: detail.user_email,
  phone:detail.user_phone,
})
  }
  }
  onSubmit(myForm){
    console.log(myForm.value);
    const jsonForUpdatingData={
      "auth_code":"test298",
      "user_id" : this.userId,
"user_name":myForm.value.name,
"user_email":myForm.value.email,
"user_age": myForm.value.age,
"User_phone":myForm.value.phone
    }
    this.service.updateUserDetail(JSON.stringify(jsonForUpdatingData)).subscribe((res)=>{console.log(res);
    if(res.status === '1'){
      this.route.navigate(['user-creation']);
    }else{
      console.log("Something went wrong");
    }
    });
  }
}
