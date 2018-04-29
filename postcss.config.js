module.exports = {
  plugins: [
    require('postcss-import'),
    // support @custom-media variables in media queries
    require('postcss-custom-media'),
    // without this, it will not replace var(--name), and variables won't work
    // unless the browser supports it
    require('postcss-custom-properties')({preserve: false}),
    // remove ":root {}" artifacts left over after postcss-custom-properties
    require('postcss-remove-root'),
    // supported browsers is defined in the "browserslist" property in package.json
    require('autoprefixer'),
  ]
}
