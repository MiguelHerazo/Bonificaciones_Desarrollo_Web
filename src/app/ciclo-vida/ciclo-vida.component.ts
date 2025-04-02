import { Component, Input, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  standalone: true,
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  @Input() mensaje: string = '';

  ngOnInit() { console.log('ngOnInit'); }
  ngOnChanges() { console.log('ngOnChanges'); }
  ngDoCheck() { console.log('ngDoCheck'); }
  ngAfterViewInit() { console.log('ngAfterViewInit'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}
