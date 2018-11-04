import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  age: number;
  nom: string;
  email: string;
  hobby: hobby;


  constructor(private donnees : UtilisateurService) {
    this.age = 25;
    this.nom = 'Reda';
    this.email = 'hilmi.reda@gmail.com';
    this.hobby = {
      hobby1 :'foot',
      hobby2 : 'golf',
      hobby3 : 'basket'
    };
  }

  ngOnInit() {
  }

  onClick(){
    alert('toto');
  }

}


  interface hobby {

  hobby1: string;
  hobby2: string;
  hobby3: string;


}


