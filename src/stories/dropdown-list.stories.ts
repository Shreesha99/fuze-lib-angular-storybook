import { Meta, StoryFn } from '@storybook/angular';
import { DropdownListComponent } from './dropdown-list.component';

export default {
  title: 'Library/Dropdown List',
  component: DropdownListComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          The **Dropdown List Component** is a customizable dropdown that allows users to select an item from a list. It is designed to be flexible and can be styled to fit a variety of use cases.
          
          ### Features
          - **Customizable item list**: Populate the dropdown with any list of items
          - **Selected item**: Displays the currently selected item or a placeholder when none is selected
          - **Customizable placeholder text**: Shows a default placeholder when no item is selected
          - **Event handling**: Emits the selected item when an option is chosen
          - **Toggleable dropdown visibility**: Can be opened and closed by clicking the button
          
          ### Usage Example
          \`\`\`html
          <lib-dropdown-list
            [items]="['Option 1', 'Option 2', 'Option 3']"
            placeholder="Select an option"
            (onSelect)="handleSelect($event)">
          </lib-dropdown-list>
          \`\`\`
          `,
      },
    },
  },
} as Meta;

const Template: StoryFn<DropdownListComponent> = (args) => ({
  component: DropdownListComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  items: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Select an option',
};
