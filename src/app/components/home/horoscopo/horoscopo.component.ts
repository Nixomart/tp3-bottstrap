import { Component } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent {
  signo: string = 'aries'
  daily= {
    title:'',
    date: '',
    text:''
  }
  constructor(private hService: HoroscopoService){
    this.getAllDayle(this.signo);
  }
  getAllDayle = (signol:string) =>{
    console.log(signol)
    
    this.hService.getDayliSign(signol).subscribe(
      (result)=>{
        this.daily.date = result.date_range
        this.daily.text = result.about
        this.daily.title = result.name
        console.log(result)
      },
      error => console.log(error)
    )
  }
}
