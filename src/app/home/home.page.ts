import { Component, Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public items:any;
    public items2:any;

  constructor(public navCtrl: NavController,public http: HttpClient){
    this.Funcao();
  }

  Funcao(){
   let url = 'http://www.json-generator.com/api/json/get/cfjBorXJua?indent=2';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
      this.items2 = result;
      console.log(result);
    });
  }

  PegarItems(ev: any){
    this.IniciarItems();
    let val = ev.target.value;
    let val2 = ev.target.value;

    if(val && val.trim()!=''){
        this.items = this.items.filter((items)=>{
          return (items.trainner.toLowerCase().indexOf(val.toLowerCase())>-1);
        });
    }else {
      this.items = this.items2;
    }
  }

  IniciarItems(){
    return this.items;
  }
}





