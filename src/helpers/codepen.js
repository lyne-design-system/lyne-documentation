import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

export const componentHtml = (element, name) => {
  let properties;

  if (element.attrs) {
    properties = Object.entries(element.attrs)
      .map(([
        key,
        val
      ]) => {

        // replace quotes with &quot; entity
        const escapedVal = val.replace(/["']/gu, '&quot;');

        return ` ${key}="${escapedVal}"`;
      })
      .join('');
  } else {
    properties = '';
  }

  const {
    slots
  } = element;
  const slotsString = slots && slots.length > 0
    ? slots.join('')
    : '';

  const comp = `<${name}${properties}>${slotsString}</${name}>`;

  const formatted = prettier.format(comp, {
    htmlWhitespaceSensitivity: 'ignore',
    parser: 'html',
    plugins: [parserHtml],
    printWidth: 80,
    semi: false,
    useTabs: false
  });

  return formatted;
};

export const codepenHtml = (element, name) => {

  /* eslint-disable no-useless-escape */
  const html = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Lyne Components Sandbox: ${name}</title>
    <script src='https://unpkg.com/lyne-test/dist/lyne-components/lyne-components.js'><\/script>
  </head>
  <body>
    ${componentHtml(element, name)}
  </body>
</html>
  `;
  /* eslint-enable no-useless-escape */

  return html;
};
