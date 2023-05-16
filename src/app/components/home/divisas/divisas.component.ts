import { Component } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css'],
})
export class DivisasComponent {
  convertido: number = 0;
  cant: number = 0;
  toType: string = "";
  fromType: string = 'USD';
  constructor(private divisaService: DivisasService) {
  }

  handleDvisas = () => {
    console.log(this.cant);
    console.log(this.fromType);
    console.log(this.toType);
    this.divisaService.convertDivisas(this.cant, this.fromType, this.toType).subscribe(
      (result)=>{
       this.convertido = result.result; 
        console.log(result)
      },
      error => console.log(error, 'error')
    )
  };
}
