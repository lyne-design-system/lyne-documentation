const codepenHtml = (element, name) => {

  /* eslint-disable no-useless-escape */
  const html = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Lyne Components Sandbox: ${name}</title>
    <!--
      Since font-face declarations can not be made within the shadow DOM, also
      self-contained/encapsulated web components need to define the font-face
      declarations outside of the shadow DOM until this will be allowed/this bug is solved
      https://bugs.chromium.org/p/chromium/issues/detail?id=336876
    -->
    <style>
      @font-face {
        font-family: 'SBBWeb Bold';
        src: url('https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Bold.woff2') format('woff2'),
        url('https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Bold.woff') format('woff');
        font-display: swap;
      }

      @font-face {
        font-family: 'SBBWeb Light';
        src: url('https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Light.woff2') format('woff2'),
        url('https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Light.woff') format('woff');
        font-display: swap;
      }

      @font-face {
        font-family: 'SBBWeb Roman';
        src: url('https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Roman.woff2') format('woff2'),
        url('https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Roman.woff') format('woff');
        font-display: fallback;
      }
    </style>
    <script type='module' src='https://unpkg.com/@sbb-esta/lyne-components/dist/lyne-components/lyne-components.esm.js'><\/script>
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
