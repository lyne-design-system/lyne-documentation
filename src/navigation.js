const navigationData = [
  {
    children: [
      {
        name: 'Glossary',
        path: '/about/glossary/'
      },
      {
        name: 'Benefits',
        path: '/about/benefits/'
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
    name: 'Contributing',
    path: '/contributing/'
  },
  {
    children: [
      {
        name: 'Color & Font',
        path: '/tokens/tokens/'
      },
      {
        name: 'Icons',
        path: '/tokens/icons/'
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
