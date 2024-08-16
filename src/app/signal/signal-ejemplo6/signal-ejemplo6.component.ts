import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-signal-ejemplo6',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo6.component.html',
  styleUrl: './signal-ejemplo6.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo6Component {

counter$ = interval(1000).pipe(take(10));

counter = toSignal(this.counter$);

 

counter2$ = interval(1000).pipe(take(10));

counterConValorInicial = toSignal(this.counter2$, {initialValue: 0});



counter3$ = interval(500).pipe(take(10));

counterUpTo5 = toSignal(this.counter3$);

}
