import { Directive, HostBinding, Input } from '@angular/core';
import { NbComponentOrCustomStatus } from '@nebular/theme';
export type Weight = 'normal' | 'medium' | 'bold' 
@Directive({
  selector: '[link]',
  host: {
    class: 'link',
},
})
export class LinkDirective {
  @Input() weight!:Weight;
  @Input()
  status: NbComponentOrCustomStatus = 'basic';
  constructor() { }

 @HostBinding('class.link--normal')
 get normal(){
  return this.weight = 'normal';
 }

 @HostBinding('class.link--medium')
 get medium(){
  return this.weight = 'medium';
 }

 @HostBinding('class.link--bold')
 get bold(){
  return this.weight = 'bold';
 }

 @HostBinding('class.link--basic')
    get basic() {
        return this.status === 'basic';
    }

    @HostBinding('class.link--primary')
    get primary() {
        return this.status === 'primary';
    }

    @HostBinding('class.link--danger')
    get danger() {
        return this.status === 'danger';
    }

    @HostBinding('class.link--info')
    get info() {
        return this.status === 'info';
    }

    @HostBinding('class.link--success')
    get success() {
        return this.status === 'success';
    }

    @HostBinding('class.link--warning')
    get warning() {
        return this.status === 'warning';
    }


}
