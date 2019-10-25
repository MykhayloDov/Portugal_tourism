import {Component, Input, Output, EventEmitter} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-shop-module',
  templateUrl: './shop-module.component.html',
  styleUrls: ['./shop-module.component.scss']
})
export class ShopModuleComponent {
  private displayService: any;
  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
  counterValue = 0;
  @Output() counterChange = new EventEmitter();
  show: any;
  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
  toggle1() {
    this.show = !this.show;
  }

  showModal(): void {
    $('#myModal').modal('show');
  }
  sendModal(): void {
    this.hideModal();
  }
  hideModal(): void {
    $('#myModal').modal('hide'); }
}

