import { Font } from '../src';

test('create a font', () => {
  const font = Font.create('Demo', {
    100: {
      normal: { woff: '/path-to-font-normal.woff', woff2: '/path-to-font-normal.woff2' },
      italic: {
        woff: '/path-to-font-normal-italic.woff',
        woff2: '/path-to-font-normal-italic.woff2',
      },
    },
    700: {
      normal: '/path-to-font-thin',
    },
  });

  expect(font.styles.Thin).toBe(font.styles[100]);

  expect(font.fontFaces).toMatchInlineSnapshot(`
    "@font-face {
      font-family: 'Demo';
      src: url('/path-to-font-normal-italic.woff') format('woff2'),
          url('/path-to-font-normal-italic.woff2') format('woff');
      font-weight: 100;
      font-style: italic;
    }@font-face {
      font-family: 'Demo';
      src: url('/path-to-font-normal.woff') format('woff2'),
          url('/path-to-font-normal.woff2') format('woff');
      font-weight: 100;
      font-style: normal;
    }@font-face {
      font-family: 'Demo';
      src: url('/path-to-font-thin.woff') format('woff2'),
          url('/path-to-font-thin.woff2') format('woff');
      font-weight: 700;
      font-style: normal;
    }"
  `);

  expect(font.styles).toEqual({
    '100': {
      Italic: { fontFamily: 'Demo', fontStyle: 'italic', fontWeight: 100 },
      Normal: { fontFamily: 'Demo', fontWeight: 100 },
    },
    '700': { fontFamily: 'Demo', fontWeight: 700 },
    Bold: { fontFamily: 'Demo', fontWeight: 700 },
    Thin: {
      Italic: { fontFamily: 'Demo', fontStyle: 'italic', fontWeight: 100 },
      Normal: { fontFamily: 'Demo', fontWeight: 100 },
    },
  });
});
