import { Meta, StoryFn } from '@storybook/angular';
import { TextboxComponent } from 'lib-fuze';

export default {
  title: 'Library/Textbox',
  component: TextboxComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Textbox Component** is a customizable textbox component designed to fit seamlessly into various UI designs. It supports placeholder text, default values, and a disabled state.

### Features
- **Customizable placeholder text**: Add a hint to the textbox
- **Dynamic value**: Control the initial value of the textbox
- **User-controlled rounding**: Set the border radius using the \`borderRadius\` input
- **Disabled state**: Make the textbox non-interactive when needed
- **Event handling**: Emits value changes via an event

### Usage Example
\`\`\`html
<lib-textbox
  [placeholder]="'Enter your name...'"
  [value]="''"
  [disabled]="false"
  [borderRadius]="'1em'"
  (onInputChange)="handleInputChange($event)">
</lib-textbox>
\`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn<TextboxComponent> = (args) => ({
  component: TextboxComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  value: '',
  disabled: false,
  borderRadius: '0.5em',
};

export const DisabledTextbox = Template.bind({});
DisabledTextbox.args = {
  placeholder: 'Disabled textbox',
  value: '',
  disabled: true,
  borderRadius: '0.5em',
};

export const RoundedTextbox = Template.bind({});
RoundedTextbox.args = {
  placeholder: 'Rounded textbox',
  value: '',
  disabled: false,
  borderRadius: '1em',
};

export const SharpEdgedTextbox = Template.bind({});
SharpEdgedTextbox.args = {
  placeholder: 'Sharp-edged textbox',
  value: '',
  disabled: false,
  borderRadius: '0px',
};
