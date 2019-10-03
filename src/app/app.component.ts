import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  typesOfShoes = ['plan for D bday on' ,'buy shoes', 'visit mom', 'buy gift for shash'];
  february = ['visit Shash' ,'study for sessional1'];
  march = ['go for grocery shopping' ,'buy books for NET','remind raman to buy me a gift'];
}
export class todolist implements OnInit{
  contactlist;
  textname;
  textage;
  ngOnInit()
  {
    this.contactlist=[]
  }
  addcontact()
  {
    console.log(this.textname);
    this.contactlist.push
  }
}
