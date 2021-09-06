const arrowIcon = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m17.8436,12.1382-3.99-3.99196-.7072.70693,3.1366,3.13823H5v1h11.287l-3.1413,3.1555.7086.7056,3.99-4.008.3519-.3535-.3526-.3528z"></path></svg>';

const accordionItemContent = '<p slot="content">Donec sed odio operae, eu vulputate felis rhoncus. Curabitur est gravida et libero vitae dictum. Me non paenitet nullum festiviorem excogitasse ad hoc.</p><p slot="content">2 Donec sed odio operae, eu vulputate felis rhoncus. Curabitur est gravida et libero vitae dictum. Me non paenitet nullum festiviorem excogitasse ad hoc.</p><p slot="content">3 Quis aute iure reprehenderit in voluptate velit esse. Ab illo tempore, ab est sed immemorabili. Non equidem invideo, lit aliquet. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.</p>';

const accordionItemArrow = '<svg slot="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m17.8436,12.1382-3.99-3.99196-.7072.70693,3.1366,3.13823H5v1h11.287l-3.1413,3.1555.7086.7056,3.99-4.008.3519-.3535-.3526-.3528z"></path></svg>';

const componentsData = [
  {
    name: 'lyne-accordion',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/lyne-accordion--default',
    variants: [
      {
        containerClass: 'white-bg',
        slots: [
          `<lyne-accordion-item heading="Accordion Item 1" heading-level="2" icon >${accordionItemContent}${accordionItemArrow}</lyne-accordion-item>`,
          `<lyne-accordion-item heading="Accordion Item 2" heading-level="2" icon >${accordionItemContent}${accordionItemArrow}</lyne-accordion-item>`
        ],
        title: 'default'
      },
      {
        attrs: {
          'non-white-background': 'true'
        },
        slots: [
          `<lyne-accordion-item heading="Accordion Item 1" heading-level="2" icon >${accordionItemContent}${accordionItemArrow}</lyne-accordion-item>`,
          `<lyne-accordion-item heading="Accordion Item 2" heading-level="2" icon >${accordionItemContent}${accordionItemArrow}</lyne-accordion-item>`
        ],
        title: 'for non-white backgrounds'
      },
      {
        attrs: {
          'non-white-background': 'true',
          'only-one-open': 'true'
        },
        slots: [
          `<lyne-accordion-item heading="Accordion Item 1" heading-level="2" icon >${accordionItemContent}${accordionItemArrow}</lyne-accordion-item>`,
          `<lyne-accordion-item heading="Accordion Item 2" heading-level="2" icon >${accordionItemContent}${accordionItemArrow}</lyne-accordion-item>`
        ],
        title: 'only one item open at a time'
      }
    ]
  },
  {
    name: 'lyne-accordion-item',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/lyne-accordion-item--default',
    variants: [
      {
        attrs: {
          'heading': 'Accordion Item',
          'hedaing-level': '2'
        },
        containerClass: 'white-bg',
        slots: [accordionItemContent],
        title: 'default'
      },
      {
        attrs: {
          'heading': 'Accordion Item',
          'hedaing-level': '2',
          'icon': 'true'
        },
        containerClass: 'white-bg',
        slots: [
          accordionItemContent,
          accordionItemArrow
        ],
        title: 'with icon'
      }
    ]
  },
  {
    name: 'lyne-button',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/lyne-button--lyne-button',
    variants: [
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'primary'
        },
        slots: [arrowIcon],
        title: 'primary'
      },
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'secondary'
        },
        slots: [arrowIcon],
        title: 'secondary'
      },
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'tertiary'
        },
        slots: [arrowIcon],
        title: 'tertiary'
      },
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'transparent'
        },
        slots: [arrowIcon],
        title: 'transparent'
      },
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'primary-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'primary-negative'
      },
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'secondary-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'secondary-negative'
      },
      {
        attrs: {
          icon: 'true',
          label: 'Button',
          variant: 'tertiary-negative'
        },
        containerStyle: 'background-color: #eb0000',
        slots: [arrowIcon],
        title: 'tertiary-negative'
      },
      {
        attrs: {
          icon: 'true',
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
    name: 'lyne-sbb-clock',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/brand-elements-sbb-clock--sbb-clock',
    variants: [
      {
        attrs: {
          'initial-time': 'now'
        },
        title: 'default'
      }
    ]
  },
  {
    name: 'lyne-panel',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/lyne-panel--lyne-panel',
    variants: [
      {
        attrs: {
          'button-text': 'Panel Button',
          'text': 'Panel Title Text'
        },
        title: 'default'
      }
    ]
  },
  {
    name: 'lyne-pearl-chain',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/lyne-pearl-chain--no-stops',
    variants: [
      {
        attrs: {
          legs: '{"legs": [{"cancellation": false, "duration": 100}]}',
          status: '33'
        },
        title: 'no stops'
      },
      {
        attrs: {
          legs: '{"legs":[{"cancellation":false,"duration":10},{"cancellation":false,"duration":5},{"cancellation":false,"duration":5},{"cancellation":false,"duration":10},{"cancellation":false,"duration":10},{"cancellation":false,"duration":5},{"cancellation":false,"duration":5},{"cancellation":false,"duration":10},{"cancellation":false,"duration":15},{"cancellation":false,"duration":25}]}',
          status: '33'
        },
        title: '9 stops'
      },
      {
        attrs: {
          legs: '{"legs":[{"cancellation":false,"duration":10},{"cancellation":false,"duration":5},{"cancellation":false,"duration":5},{"cancellation":true,"duration":10},{"cancellation":false,"duration":10},{"cancellation":false,"duration":5},{"cancellation":false,"duration":5},{"cancellation":true,"duration":10},{"cancellation":false,"duration":15},{"cancellation":true,"duration":25}]}',
          status: '33'
        },
        title: '9 stops with cancellations'
      }
    ]
  },
  {
    name: 'lyne-sbb-logo',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/brand-elements-sbb-logo--sbb-logo',
    variants: [
      {
        attrs: {
          'protective-room': 'none',
          'variant': 'default'
        },
        containerStyle: 'max-width: 500px',
        title: 'default'
      },
      {
        attrs: {
          'protective-room': 'ideal',
          'variant': 'default'
        },
        containerStyle: 'max-width: 500px;',
        title: 'ideal protective room'
      },
      {
        attrs: {
          'protective-room': 'ideal',
          'variant': 'negative'
        },
        containerStyle: 'max-width: 500px;background-color: gray',
        title: 'negative'
      },
      {
        attrs: {
          'protective-room': 'ideal',
          'variant': 'on-red'
        },
        containerStyle: 'max-width: 500px;background-color: #eb0000',
        title: 'on red'
      },
      {
        attrs: {
          'protective-room': 'ideal',
          'variant': 'black-on-white'
        },
        containerStyle: 'max-width: 500px',
        title: 'black on white'
      },
      {
        attrs: {
          'protective-room': 'ideal',
          'variant': 'white-on-black'
        },
        containerStyle: 'max-width: 500px;background-color: black',
        title: 'white-on-black'
      }
    ]
  },
  {
    name: 'lyne-title',
    storybook: 'https://lyne-components-storybook.netlify.app/?path=/story/brand-elements-clock--clock',
    variants: [
      {
        attrs: {
          'level': '1',
          'text': 'Title level 1',
          'visual-level': '1'
        },
        title: 'level 1'
      },
      {
        attrs: {
          'level': '2',
          'text': 'Title level 2',
          'visual-level': '2'
        },
        title: 'level 2'
      },
      {
        attrs: {
          'level': '3',
          'text': 'Title level 3',
          'visual-level': '3'
        },
        title: 'level 3'
      },
      {
        attrs: {
          'level': '4',
          'text': 'Title level 4',
          'visual-level': '4'
        },
        title: 'level 4'
      },
      {
        attrs: {
          'level': '5',
          'text': 'Title level 5',
          'visual-level': '5'
        },
        title: 'level 5'
      },
      {
        attrs: {
          'level': '6',
          'text': 'Title level 6',
          'visual-level': '6'
        },
        title: 'level 6'
      }
    ]
  }
];

module.exports = componentsData;
