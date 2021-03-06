import { Component, h } from '@stencil/core';

@Component({
  tag: 'the-citadel',
})
export class TheCitadel {

  render() {
    return (
      <div>
        <header>
          <div class="logo"> </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0} >
              <stencil-route url="/" component="golden-plaza" exact={true} />
              <stencil-route url="/:case/:id" component="data-card" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <madness-module enabled={true} >
        </madness-module>
      </div>
    );
  }
}
