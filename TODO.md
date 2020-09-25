- [ ] currently, there are two webhooks implemented on datoCms.
  (1) custom webhook, on publish or delete, build on travis is triggered.
  (2) enironment: a build on travis can manually be triggered on the ui of datocms.
  -> decide for trigger strategy. (1), (2) or mixed (1 & 2)

- [ ] for now, we use `npm up lyne-test` in travis config, to make sure that always the latest version from lyne-components is installed. We have the same issue in lyne-components build, where we have lyne-design-tokens as a dependency and always want latest version. Find a better way to get always latest version with every `npm install`

- [ ] currently, components are rendered client side. Enable SSR

- [ ] every published content change in dato triggers a build in travis. e.g. if you change an publish 5 content items in 1 minute, travis will have 5 jobs waiting to be run. But in such cases, only the last change should be build on travis, the other ones should be skipped/canceled. We have the option on travis to "auto cancel branch build". But that only works if every build trigger has a different commit hash. Possible solution:
  - remove the dato webhook for travis
  - add a github webhook which is making an empty commit: `git commit --allow-empty -m "content: change in dato"`
    - if we use empty commits add `content` to commitlint.config.js
  - that way, we would get a new commit hash for every trigger
- [ ] navigation.js -> children page's paths include parent path. use it. e.g. children vocabulary has path "/about/vocabulary". refactor so that we can use "vocabulary"
