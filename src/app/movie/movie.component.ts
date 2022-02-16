import { Component, Input , Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-movie',
  
  template: `
   <div class="container"> 
    <div class="card" style="width: 18rem; margin lefr= 10px">
  <img src="/assets/images/AAAABVM8FGjuh_qA0KWMX5G1APlUH1tHJeR6lx5SPEWEbPR9seclxatx2w0AEEPvH2biwxLVzGwK7yFnUaew2qiP_DtP-zA.jpg"  class="card-img-top" alt="Tom Hangs">
  <div class="card-body">
    <h5 class="card-title">Forrest Gump</h5>
    <p class="card-text">Forrest Gump är filmen som blev kult. Tom Hanks gör en otrolig prestation i rollen som Forrest, en helt vanlig man vars oskuldsfullhet kom att påverka en hel generation.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="/assets/images/AAAABfIhLOllEa_dOOPLwZQFnTcWtNyA4I4ethWfDIIIkrLnMDB_VKwGeviNXGxJNGgKHNjK3E2vfkQQDusq8F7NaMYy79A.jpg"  class="card-img-top" alt="Tom Hangs">
  <div class="card-body">
    <h5 class="card-title">Hobbit</h5>
    <p class="card-text">Bilbo Bagger slår följe med en grupp driftiga dvärgar som vill återta sitt kungarike. Under den livsfarliga färden möter de rader av varelser, bland annat en viss Gollum.</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    <!-- <button class="btn btn-primary"(click)="handleClickMe()"> Click me!</button> -->
  </div>
</div>
`,

  

  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie: any
}
   
  
  

