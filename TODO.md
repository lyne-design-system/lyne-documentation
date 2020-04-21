- [ ] currently, there are two webhooks implemented on datoCms.
  (1) custom webhook, on publish or delete, build on travis is triggered.
  (2) enironment: a build on travis can manually be triggered on the ui of datocms.
  -> decide for trigger strategy. (1), (2) or mixed (1 & 2)

- [ ] for now, we use `npm up lyne-test` in travis config, to make sure that always the latest version from lyne-components is installed. We have the same issue in lyne-components build, where we have lyne-design-tokens as a dependency and always want latest version. Find a better way to get always latest version with every `npm install`

- [ ] currently, components are rendered client side. Enable SSR
