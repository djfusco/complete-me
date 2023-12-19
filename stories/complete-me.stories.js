import { html } from 'lit';
import '../src/complete-me.js';

export default {
  title: 'CompleteMe',
  component: 'complete-me',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <complete-me
      style="--complete-me-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </complete-me>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
