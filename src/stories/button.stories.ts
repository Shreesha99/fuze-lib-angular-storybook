import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Library/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
    borderRadius: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Button Component** is a versatile component that supports various states and styles.

### Features
- **Customizable size**: \`small\`, \`medium\`, \`large\`
- **Primary and secondary styling**
- **Disabled state**
- **Customizable background color** via the \`backgroundColor\` property
- **Border radius customization** via the \`borderRadius\` property

### Usage Example
\`\`\`html
<lib-button 
  [primary]="true"
  [size]="'large'"
  [backgroundColor]="'#DC3E4E'"
  [borderRadius]="'0.5em'"
  (onClick)="handleClick($event)">
  Primary Button
</lib-button>
\`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonComponent> = (args: any) => ({
  props: {
    ...args,
    onClick: (event: Event) => args.onClick && args.onClick(event),
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
  primary: true,
  size: 'medium',
  backgroundColor: '#DC3E4E',
  borderRadius: '1em',
  disabled: false,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Primary Button',
  primary: true,
  size: 'medium',
  backgroundColor: '#DC3E4E',
  borderRadius: '1em',
  disabled: false,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Secondary Button',
  primary: false,
  size: 'medium',
  backgroundColor: 'transparent',
  borderRadius: '1em',
  disabled: false,
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: 'Large Button',
  primary: true,
  size: 'large',
  backgroundColor: '#DC3E4E',
  borderRadius: '1em',
  disabled: false,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: 'Small Button',
  primary: true,
  size: 'small',
  backgroundColor: '#DC3E4E',
  borderRadius: '1em',
  disabled: false,
};
