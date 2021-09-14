import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});


export const primary = () => ({
  moduleMetadata: {
    imports: [MatToolbarModule] // <-- import the module
  },
// Primary.args = {
//     title:  '',
// }
});