const codepenHtml = (element, name) => {
  const properties = Object.entries(element.attrs)
    .map(([
      key,
      val
    ]) => `${key}="${val}"`)
    .join(' ');

  const {
    slots
  } = element;
  const slotsString = slots && slots.length > 0
    ? slots.join()
    : '';

  const comp = `<${name} ${properties}>${slotsString}</${name}>`;

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
    ${comp}
  </body>
</html>
  `;
  /* eslint-enable no-useless-escape */

  return html;
};

export default codepenHtml;
