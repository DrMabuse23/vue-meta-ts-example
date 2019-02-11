import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Event() myEvent: EventEmitter;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  private i = 0;
  private getText(): string {
    return format(this.first, this.middle, this.last);
  } 

  emitIt() {
    console.log('emitted');
    this.myEvent.emit(`test ${this.i}`);
    this.i++;
  }

  render() {
    return (
      <div>
        <div>Hello, World! I'm {this.getText()}</div>
        <button onClick={() => this.emitIt()}>emit</button>
      </div>
    );
  }
}
