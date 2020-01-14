import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../autenticar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: AutenticarService) { }

  ngOnInit() {
  }

}
