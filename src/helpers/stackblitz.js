import stackblitz from '@stackblitz/sdk';

const openStackblitz = (description, element) => {
  /* eslint-disable no-useless-escape */
  const html = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>${description}</title>
        <script src='https://unpkg.com/lyne-test/dist/lyne-components.js'><\/script>
      </head>
      <body>
        ${element}
      </body>
    </html>
  `;
  /* eslint-enable no-useless-escape */

  const js = '';
  const project = {
    description,
    files: {
      'index.html': html,
      'index.js': js
    },
    settings: {
      compile: {
        action: 'hmr',
        clearConsole: true,
        trigger: 'auto'
      }
    },
    tags: [
      'lyne',
      'design-system',
      'sbb',
      'cff',
      'ffs',
      'webcomponents'
    ],
    template: 'javascript'
  };

  const options = {
    hideDevTools: true,
    newWindow: true,
    openFile: 'index.html'
  };

  stackblitz.openProject(project, options);
};

export default openStackblitz;
