import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('pontos') pontos;
  @ViewChild('dias') dias;
  @ViewChild('titulo') titulo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.inserirdados = this.formBuilder.group(
      {
        idtitulo: ['', Validators.required],
        idpontos: ['', Validators.required],
        iddias: ['', Validators.required]
      });
  }

  logForm() {

    HighCharts.chart('container', {
      title: {
        text: this.titulo.value,
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
        title: {
          text: 'Dias'
        },
        categories: []/*['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6',
          'Dia 7', 'Dia 8', 'Dia 9', 'Dia 10']*/
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
        data: (() =>{ 
        const ideal = [];
        let i: number;
        let totalSprintEstimativa = this.pontos.value;
        let totalDias = this.dias.value;
        //let totalSprintEstimativa = this.inserirdados.value.idpontos;
        //let totalDias = this.inserirdados.value.iddias;
        let idealIncrement = totalSprintEstimativa / totalDias;
        for (i = 0; i <= totalDias - 1; i++) {
          ideal.push(idealIncrement * i);
        }
        console.log(ideal.reverse());
        return ideal;
        //[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
      })()}/*, 
      
      
      {
        name: 'Atual Burn',
        color: 'rgba(0,120,200,0.75)',
        marker: {
          radius: 6
        },
        data: [100, 110, 85, 60, 60, 30, 32, 23, 9, 2]
      }*/]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurndownPage');
  }

}