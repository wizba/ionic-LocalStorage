import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  constructor(private storage: Storage) {
    this.data = {};
  
    let User_1 = 
      {
        country: "United States of America",
        address: "638 Fahey Overpass",
        phone: "257.255.3201"
      };
    let User_2= {
        country: "United States of America",
        address: "141 Schowalter Mount",
        phone: "1-868-497-5043 x73289"
      };

   let User_3= {
        country: "United States of America",
        address: "025 Schultz Via",
        phone: "1-814-823-5520 x68656"
      };
    

    //Set Object Value
    this.setValue("user1", User_1);

    this.setValue("user2", User_2);
    this.setValue("user3",User_3);

//another way of storing data
    this.setValue("Details",{
      name:'william',
      surname:'Rabopape'
    })

    //get values from db
    //note that you can put this values in the database
    this.getValue("On");
  }

  // set a key/value
  setValue(key: string, value: any) {
    this.storage.set(key, value).then((response) => {
      console.log('set' + key + ' ', response);
 
      //get Value Saved in key
      
 
    }).catch((error) => {
      console.log('set error for ' + key + ' ', error);
    });
  }

  // get a key/value pair
  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log('get ' + key + ' ', val);
      this.data[key] = "";
      this.data[key] = val;
    }).catch((error) => {
      console.log('get error for ' + key + '', error);
    });
  }

}
