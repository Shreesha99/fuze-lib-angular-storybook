import { Meta, StoryFn } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';

export default {
  title: 'Library/Breadcrumb',
  component: BreadcrumbComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Breadcrumb Component** is used to display a navigational breadcrumb, providing a trail of links that indicates the current page’s location within a hierarchy. 

### Features
- **Customizable breadcrumb items**: Can dynamically display breadcrumb items with labels and links
- **Active breadcrumb item**: The last item in the list is marked as active, without a link
- **Supports dynamic items**: The list of breadcrumb items can be passed as input to the component

### Usage Example
\`\`\`html
<lib-breadcrumb 
  [items]="[
    { label: 'Home', link: '/' },
    { label: 'Library', link: '/library' },
    { label: 'Components', link: '' }
  ]">
</lib-breadcrumb>
\`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn<BreadcrumbComponent> = (args) => ({
  component: BreadcrumbComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', link: '/' },
    { label: 'Library', link: '/library' },
    { label: 'Components', link: '' },
  ],
};
