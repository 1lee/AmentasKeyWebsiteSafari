import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  template: `
<div class="coming-soon">
<h1>COMING SOON</h1>
</div>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
* {
  padding: 0;
  margin: 0;
}    
.coming-soon {
      min-height: calc(100vh - 100px); /*determines height of footer*/
      width: 100%;
      background: url('../assets/img/bubble.jpg') no-repeat 50% 50% fixed;
      background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      -webkit-background-size: cover;
}
h1 {
  text-align: center;
  font-size: 4 em;
  font-family: 'Roboto', sans-serif; 
  color: #fff;
}
@media screen and (max-width: 500px){
h1 {
  padding-top: 55%;
  transition: all 1s;
}
}
  `]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
