import { Meta, StoryFn } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

export default {
  title: 'Library/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Accordion Component** allows users to view sections of content in a collapsible panel format. This component supports dynamic addition of new accordion items and handles toggle functionality.

### Features
- **Customizable accordion items**: Each accordion item can have its own title and content.
- **Toggle functionality**: Users can expand or collapse items by clicking the header.
- **Dynamic addition**: New accordion items can be added by specifying the \`itemCount\` input property.
- **Open/Close state**: The \`isOpen\` input property controls whether the items are open by default.

### Usage Example
\`\`\`html
<lib-accordion [itemCount]="5" [isOpen]="true"></lib-accordion>
\`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn<AccordionComponent> = (args) => ({
  component: AccordionComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  itemCount: 3, // Number of accordion items
  isOpen: false, // Open items by default
};
