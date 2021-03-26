import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'madness-module',
})
export class MadnessModule {
@Prop() enabled : boolean;

// dimensionalShift(){
//     var divsize = ((Math.random()*100) + 50).toFixed();
//
//     var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
//     var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
//
//     $('#phasing').css({
//       'position':'absolute',
//       'left':posx+'px',
//       'top':posy+'px',
//       'display':'none'
//     }).appendTo( 'body' ).fadeIn(500).delay(1200).fadeOut(700, function(){
//       dimensionalShift();
//     });
//   }

  render() {
    if (this.enabled === true) {
      return (
        <div class="text-area">
          <i>W-What have you done Morty?!</i>
        </div>
      );
    }
  }
}

