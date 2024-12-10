import { Meta, StoryFn } from '@storybook/angular';
import { TextareaComponent } from './textarea/textarea.component';

export default {
  title: 'Form Controls/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Textarea Component** provides a customizable text input area with dynamic styling and features. 

### Features
- **Dynamic styling**:
  - \`backgroundColor\`: Sets the background color of the textarea.
  - \`height\` and \`width\`: Control the dimensions of the textarea.
  - \`borderRadius\`: Adjusts the corner rounding of the textarea.
- **Character limit**:
  - \`maxLength\` sets the maximum number of characters allowed.
  - Displays the character count dynamically.
- **Placeholder support**: Set placeholder text for guidance.
- **Event handling**: Emits text changes through the \`textChange\` event for integration.
- **Focus state**: Highlights the textarea with a glow effect when focused.

### Usage Example
\`\`\`html
<lib-textarea
  [height]="'150px'"
  [width]="'100%'"
  [backgroundColor]="'#DC3E4E'"
  [borderRadius]="'5px'"
  [maxLength]="200"
  [placeholder]="'Type your text here...'"
  (textChange)="handleTextChange($event)">
</lib-textarea>
\`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn<TextareaComponent> = (args) => ({
  component: TextareaComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  height: '150px', // Textarea height
  width: '100%', // Textarea width
  backgroundColor: '#fff', // Background color
  borderRadius: '5px', // Border radius
  maxLength: 200, // Maximum character limit
  placeholder: 'Type your text here...', // Placeholder text
};
