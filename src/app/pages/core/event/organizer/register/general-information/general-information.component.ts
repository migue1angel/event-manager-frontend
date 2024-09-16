import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

interface Category {
  name: string,
  code: string
}

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss'
})
export class GeneralInformationComponent {
  stateOptions: any[] = [{ label: 'Si', value: 'si' },{ label: 'No', value: 'no' }];

    value: string = 'off';
  prevCallback: any;

  groupedCategory!: SelectItemGroup[];

    selectedCategory!: Category[];

    constructor() {
        this.groupedCategory = [
            {
                label: 'Deportes',
                value: 'de',
                items: [
                    { label: 'Fútbol', value: 'Fútbol' },
                    { label: 'Básquet', value: 'Básquet' },
                    { label: 'Tenis', value: 'Tenis' },
                    { label: 'Voleibol', value: 'Voleibol' }
                ]
            },
            {
                label: 'Bellakeo',
                value: 'be',
                items: [
                    { label: 'Bellakeo de $1', value: 'Bellakeo de $1' },
                    { label: 'En la Foch', value: 'En la Foch' },
                    { label: 'Bellakeo fino de $15', value: 'Bellakeo fino de $15' }
                ]
            },
        ];
    }
    
}
