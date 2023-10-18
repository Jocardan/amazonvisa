import { Component, OnInit } from '@angular/core';
import { Partner } from '../../types/partner';

@Component({
  selector: 'app-benefits-page',
  templateUrl: './benefits-page.component.html',
  styleUrls: ['./benefits-page.component.scss']
})
export class BenefitsPageComponent implements OnInit {

  partners = [
    { 
      title: 'Bolo ao Forno & Cia',
      address: 'Rua Afonso Brás, 493',
      phone:  3564.0547,
      benefit: '5% de desconto',
      image: undefined
    },
    { 
      title: 'Bread&Co • padaria e confeitaria',
      address: 'R. Lourenço de Almeida, 470',
      phone:  3045.7242,
      benefit: '10% de desconto em qualquer produto na loja menos no buffet e a la carte.',
      image: undefined
    }
  ] as Partner[]

  constructor() {
    const partners = this.partners;
    this.partners = this.partners.concat(partners)
    this.partners = this.partners.concat(partners)
    this.partners = this.partners.concat(partners)
    this.partners = this.partners.concat(partners)
  }

  ngOnInit(): void {
  }

}
