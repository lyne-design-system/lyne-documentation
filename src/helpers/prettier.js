import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

const prettierHtml = (element) => {
  const formatted = prettier.format(element, {
    htmlWhitespaceSensitivity: 'ignore',
    parser: 'html',
    plugins: [parserHtml],
    printWidth: 80,
    semi: false,
    useTabs: false
  });

  return formatted;
};

export default prettierHtml;
