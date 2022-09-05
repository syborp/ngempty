import {Component, Injectable, OnInit, ViewContainerRef, ViewChild, ElementRef} from "@angular/core";
import { EventData, ScrollView, SwipeGestureEventData } from '@nativescript/core';
import * as ModalPicker from 'nativescript-modal-datetimepicker';


@Component({
  selector: "Items",
  //moduleId: module.id,
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"]

})

@Injectable()
export class ItemsComponent implements OnInit {

  public selectedDate: string;

  @ViewChild("scrollView", { static: false }) scrollView: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreate() {
  }

  zeroFill( number, width ) {
    width -= number.toString().length;
    if ( width > 0 ) {
      return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
    }
    return number + ""; // always return a string
  }  

  procDate(result) {
      var day="";
      var month="";
      if (result.day<10) {
        day=this.zeroFill(result.day, 2);
      } else {
        day=String(result.day);
      }
      if (result.month<10) {
        month=this.zeroFill(result.month, 2);
      } else {
        month=String(result.month);
      }
      let year=result.year;
      let proper_date=year+"-"+month+"-"+day;
      return proper_date;
  }

  getDate() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      maxDate: new Date(),
    }).then((result) => {
      let testDate=this.procDate(result);
      this.selectedDate=testDate;
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  onTap() {
    alert("Tap");
  }





}
