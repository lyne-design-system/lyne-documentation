const navigationData = [
  {
    children: [
      {
        name: 'What is Lyne',
        path: '/about/what'
      },
      {
        name: 'Why Lyne',
        path: '/about/why'
      },
      {
        name: 'How we work',
        path: '/about/how'
      }
    ],
    name: 'About Lyne',
    path: '/about'
  },
  {
    children: [
      {
        children: [
          {
            name: 'Sketch',
            path: '/designing/design-kits/sketch'
          },
          {
            name: 'Figma',
            path: '/designing/design-kits/figma'
          }
        ],
        name: 'Design kits',
        path: '/designing/design-kits'
      }
    ],
    name: 'Designing',
    path: '/designing/'
  },
  {
    children: [
      {
        name: 'Color & Font',
        path: '/tokens/tokens'
      },
      {
        name: 'Icons',
        path: '/tokens/icons'
      }
    ],
    name: 'Tokens',
    path: '/tokens/'
  },
  {
    children: [
      {
        name: 'comp1',
        path: '/components/comp1'
      }
    ],
    name: 'Components',
    path: '/components/'
  }
];

export default navigationData;
