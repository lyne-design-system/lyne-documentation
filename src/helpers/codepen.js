const codepenHtml = (element, name) => {

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
    ${element}
  </body>
</html>
  `;
  /* eslint-enable no-useless-escape */

  return html;
};

export default codepenHtml;
