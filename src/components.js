const arrowIcon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m17.8436,12.1382-3.99-3.99196-.7072.70693,3.1366,3.13823H5v1h11.287l-3.1413,3.1555.7086.7056,3.99-4.008.3519-.3535-.3526-.3528z"></path></svg>';

const componentsData = [
  {
    name: 'lyne-button',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/lyne-button--lyne-button',
    variants: [
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'primary'
        },
        slots: [arrowIcon],
        title: 'primary'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'secondary'
        },
        slots: [arrowIcon],
        title: 'secondary'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'tertiary'
        },
        slots: [arrowIcon],
        title: 'tertiary'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'transparent'
        },
        slots: [arrowIcon],
        title: 'transparent'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'primary-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'primary-negative'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'secondary-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'secondary-negative'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'tertiary-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'tertiary-negative'
      },
      {
        attrs: {
          icon: true,
          label: 'Button',
          variant: 'transparent-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'transparent-negative'
      }
    ]
  },
  {
    name: 'lyne-link',
    variants: [
      {
        attrs: {
          link: '#',
          text: 'Link text'
        },
        title: 'default'
      }
    ]
  },
  {
    name: 'lyne-clock',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/brand-elements-clock--clock',
    variants: [
      {
        attrs: {
          'initial-time': 'now'
        },
        title: 'default'
      }
    ]
  }
];

module.exports = componentsData;
