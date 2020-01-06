import { Component, OnInit } from '@angular/core';
import { Postcode } from '../models/postcode';
import { PostcodeService } from '../services/postcode.service';

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.scss']
})
export class PostcodeComponent implements OnInit {

  searchText :string;
  Postcodes  :Postcode[];

  constructor( private postcodeservice : PostcodeService) { }

  ngOnInit() {
    this.postcodeservice.getAll().subscribe(data => {
      this.Postcodes = data;
    })
  }

}
