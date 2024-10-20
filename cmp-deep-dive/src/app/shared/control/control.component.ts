import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  @Input({ required: true }) label!: string;
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDED');
    });

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER');
    });
  }

  ngAfterContentInit() {
    console.log('AFTER CONTENT INIT');
    console.log(this.control?.nativeElement);
  }

  onClick() {
    console.log(this.control);
  }
}
