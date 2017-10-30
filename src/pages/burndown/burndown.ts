import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as HighCharts from 'highcharts';
/**
 * Generated class for the BurndownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burndown',
  templateUrl: 'burndown.html',
})
export class BurndownPage {
  
  public inserirdados : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.inserirdados = this.formBuilder.group(
      {
      idtitulo: ['', Validators.required],
      idpontos: ['', Validators.required],
      iddias: ['', Validators.required]
    });
  }

  logForm(){
    console.log(this.inserirdados.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurndownPage');
    
      HighCharts.chart('container', {
      chart: {
      type: 'bar'
      },
      title: {
      text: 'Fruit Consumption'
      },
      xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
      title: {
      text: 'Fruit eaten'
      }
      },
      series: [{
      name: 'Jane',
      data: [1, 0, 4]
      }, {
      name: 'John',
      data: [5, 7, 3]
      }]
      });

  }

}