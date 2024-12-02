import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'FuzeLib',
    brandUrl: 'https://www.fuzemantra.com/',
    brandImage:
      'https://videobucket1999.s3.ap-south-1.amazonaws.com/fuzeliblogo.png',
    brandTarget: '_blank',
  }),
});
