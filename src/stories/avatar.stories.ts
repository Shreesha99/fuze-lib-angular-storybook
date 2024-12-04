import { Meta, StoryFn } from '@storybook/angular';
import { AvatarComponent } from 'lib-fuze';

export default {
  title: 'Library/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The **Avatar Component** displays an image or a placeholder for a user or entity. It is customizable in terms of size and can display either an image or just an initial.

### Features
- **Supports image URLs**: You can display a user's image by passing an image URL
- **Fallback with initials**: If no image is provided, the component will show the first letter of the provided name
- **Customizable size**: You can define the size of the avatar to suit different design needs

### Usage Example
\`\`\`html
<lib-avatar 
  [imageUrl]="'https://videobucket1999.s3.ap-south-1.amazonaws.com/fuzeliblogo.png'" 
  [name]="'Jane Smith'" 
  [size]="80">
</lib-avatar>
\`\`\`
        `,
      },
    },
  },
} as Meta;

const Template: StoryFn<AvatarComponent> = (args) => ({
  component: AvatarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    'https://videobucket1999.s3.ap-south-1.amazonaws.com/fuzeliblogo.png',
  name: 'Fuze Lib',
  size: 80,
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  imageUrl: null,
  name: 'Fuze Lib',
  size: 60,
};
