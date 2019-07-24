import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service:UserService,private route:Router) { }

  ngOnInit() {
    // console.log(value.value);
    const sentValue={
      "auth_code":"test298" 
    }
  this.gettingListValues(JSON.stringify(sentValue));
  }

  data=[];
gettingListValues(sentValue){
  this.service.getUsers(sentValue).subscribe((res:any)=>{this.data = res.responce;
  console.log('message...in res',this.data);
  });
}

editDetails(measured){
  console.log(measured);
  this.service.settingDetailOnClick(measured);
  this.route.navigate(['user-edit']);
}
}
