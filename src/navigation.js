const navigationData = [
  {
    children: [
      {
        name: 'Lyne in depth',
        path: '/about/in-depth'
      },
      {
        name: 'Vocabulary',
        path: '/about/vocabulary'
      }
    ],
    name: 'All about Lyne',
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
    children: [],
    name: 'Components',
    path: '/components/'
  }
];

export default navigationData;
