const navigationData = [
  {
    children: [
      {
        name: 'Goals and Benefits',
        path: '/about/goals-and-benefits/'
      },
      {
        name: 'What you get',
        path: '/about/what-you-get/'
      },
      {
        name: 'How Lyne works',
        path: '/about/how-lyne-works/'
      },
      {
        name: 'How we work',
        path: '/about/how-we-work/'
      },
      {
        name: 'Glossary',
        path: '/about/glossary/'
      }
    ],
    name: 'All about Lyne',
    path: '/about/'
  },
  {
    children: [
      {
        children: [
          {
            name: 'Sketch',
            path: '/designing/design-kits/sketch/'
          },
          {
            name: 'Figma',
            path: '/designing/design-kits/figma/'
          }
        ],
        name: 'Design kits',
        path: '/designing/design-kits/'
      }
    ],
    name: 'Designing',
    path: '/designing/'
  },
  {
    name: 'Coding',
    path: '/coding/'
  },
  {
    children: [
      {
        name: 'Component',
        path: '/contributing/component/'
      }
    ],
    name: 'Contributing',
    path: '/contributing/'
  },
  {
    children: [
      {
        name: 'Guiding Principles',
        path: '/guidelines/principles/'
      },
      {
        name: 'Naming',
        path: '/guidelines/naming/'
      }
    ],
    name: 'Guidelines',
    path: '/guidelines/'
  },
  {
    children: [
      {
        name: 'Animation',
        path: '/tokens/animation/'
      },
      {
        name: 'Border',
        path: '/tokens/border/'
      },
      {
        name: 'Breakpoint',
        path: '/tokens/breakpoint/'
      },
      {
        name: 'Color',
        path: '/tokens/color/'
      },
      {
        name: 'Icons',
        path: '/tokens/icons/'
      },
      {
        name: 'Size',
        path: '/tokens/size/'
      },
      {
        name: 'Shadow',
        path: '/tokens/shadow/'
      },
      {
        name: 'Spacing',
        path: '/tokens/spacing/'
      },
      {
        name: 'Touch',
        path: '/tokens/touch/'
      },
      {
        name: 'Typography',
        path: '/tokens/typo/'
      }
    ],
    name: 'Design Tokens',
    path: '/tokens/'
  },
  {
    children: [],
    name: 'Components',
    path: '/components/'
  }
];

export default navigationData;
