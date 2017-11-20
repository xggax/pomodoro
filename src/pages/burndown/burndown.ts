import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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

  public inserirdados: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.inserirdados = this.formBuilder.group(
      {
        idtitulo: ['', Validators.required],
        idpontos: ['', Validators.required],
        iddias: ['', Validators.required]
      });
  }

  logForm() {
    /*this.inserirdados.value.idpontos = 144;
    this.inserirdados.value.iddias = 20;
    let i: number;
    console.log(this.inserirdados.value);
    let totalSprintEstimativa = this.inserirdados.value.idpontos;
    let totalDias = this.inserirdados.value.iddias;
    console.log(totalDias, totalSprintEstimativa);
    let idealIncrement = totalSprintEstimativa / totalDias;
    let ideal = [];
    for (i = 0; i <= totalDias - 1; i++) {
      ideal.push(idealIncrement * i);
    }
  console.log(ideal.reverse());*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurndownPage');

    HighCharts.chart('container', {
      title: {
        text: 'Burndown Chart',
        x: -20 //center
      },
      colors: ['blue', 'red'],
      plotOptions: {
        line: {
          lineWidth: 3
        },
        tooltip: {
          hideDelay: 200
        }
      },
      subtitle: {
        text: 'Sprint',
        x: -20
      },
      xAxis: {
        categories: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6',
          'Dia 7', 'Dia 8', 'Dia 9', 'Dia 10']
      },
      yAxis: {
        title: {
          text: 'Pontos'
        },
        plotLines: [{
          value: 0,
          width: 1
        }]
      },
      tooltip: {
        valueSuffix: ' pts',
        crosshairs: true,
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Ideal Burn',
        color: 'rgba(255,0,0,0.25)',
        lineWidth: 2,
        data: (function() { 
        const ideal = [];
        let i: number;
        const totalSprintEstimativa = 144;
        const totalDias = 10;
        //let totalSprintEstimativa = this.inserirdados.value.idpontos;
        //let totalDias = this.inserirdados.value.iddias;
        const idealIncrement = totalSprintEstimativa / totalDias;
        for (i = 0; i <= totalDias - 1; i++) {
          ideal.push(idealIncrement * i);
        }
        console.log(ideal.reverse());
        return ideal;
        //[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
      }())}, 
      
      
      {
        name: 'Atual Burn',
        color: 'rgba(0,120,200,0.75)',
        marker: {
          radius: 6
        },
        data: [100, 110, 85, 60, 60, 30, 32, 23, 9, 2]
      }]
    });

  }

}