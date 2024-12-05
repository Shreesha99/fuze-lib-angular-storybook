import { Meta, StoryFn } from '@storybook/angular';
import { AccordionComponent } from './accordion/accordion.component';

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
- **Customizable styles**: 
  - \`backgroundColor\` controls the background color of the accordion headers.
  - \`accordionBorderRadius\` and \`itemBorderRadius\` control the rounding of the accordion and individual items.
  - \`width\` and \`height\` can be adjusted for the accordion and items.
  - \`itemGap\` sets the gap between items.
- **Arrow indicator**: The accordion header features an arrow that changes direction based on whether the item is expanded or collapsed.

### Usage Example
\`\`\`html
<lib-accordion 
  [itemCount]="5" 
  [isOpen]="true"
  [backgroundColor]="'#DC3E4E'"
  [accordionBorderRadius]="'10px'"
  [itemBorderRadius]="'5px'"
  [width]="'500px'"
  [accordionHeight]="'auto'"
  [itemHeight]="'50px'"
  [itemGap]="'15px'">
</lib-accordion>
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
  backgroundColor: '#DC3E4E', // Accordion header background color
  accordionBorderRadius: '10px', // Accordion border radius
  itemBorderRadius: '5px', // Item border radius
  width: '100%', // Accordion width
  accordionHeight: 'auto', // Overall accordion height
  itemHeight: 'auto', // Individual item height
  itemGap: '10px', // Gap between items
};
