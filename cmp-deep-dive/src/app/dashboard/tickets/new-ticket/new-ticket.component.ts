import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class NewTicketComponent implements AfterViewInit {
  // @HostBinding('class') className = 'new-ticket';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{ title: string; text: string }>();

  enteredTitle = '';
  enteredText = '';

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form()?.nativeElement);
  }

  private el = inject(ElementRef);

  onClick() {
    // console.log('Clicked!');
    // console.log(this.el);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    // this.form()?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
