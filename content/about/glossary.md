<lyne-title level="1" text="Glossary" class="page-title"></lyne-title>

<lyne-title level="2" text="A-Z"></lyne-title>

This glossary defines our common vocabulary used throughout [Lyne Design System](#lyne) for a better common understanding between all disciplines. We try to list just the necessary terms to get you started and to help you to have better understanding of [Lyne](#lyne). If you miss something important please let us know and open a new [documentation issue](https://github.com/lyne-design-system/lyne/issues/new?template=00-documentation-issue.md).

<lyne-title level="3" text="Component"></lyne-title>

We define a *Component* as the smallest possible functional building block. *Components* are reusable and can be composed to [Composed Components](#composed-components). A *Component* is not a [Design Token](#design-token) but a *Component* can be built based on one or multiple Design Tokens. Within the [Lyne](#lyne) Design System a component is  always represented [Lyne Component](#lyne-component) — a [Web Component](#web-component) technically speaking. An example of a *Component* is a button which uses different Design Tokens for it's visual representation.

<lyne-title level="3" text="Component Browser"></lyne-title>

A *Component Browser* is used to develop and preview components in isolation. Throughout the [Lyne](#lyne) Design System we use [Storybook](#storybook) for either developing the component or reviewing the component afterwards.

<lyne-title level="3" text="Composed Component"></lyne-title>

A *Composed Component* is an aggregation of multiple [Components](#component), either of the same Component or of different Components.

<lyne-title level="3" text="To be defined"></lyne-title>

Can a *Composed Component* be composed out of *Composed Components*(inception)?

<lyne-title level="3" text="Component Library"></lyne-title>

Throughout the [Lyne](#lyne) Design System we use the term *Component Library* as a set of [Web Components](#web-components) represented as [Lyne Components](#lyne-components).

<lyne-title level="3" text="Design System"></lyne-title>


☝🏾First of all the definitions for *Design System*(**DS**) vary. A *Design System* can be or include many things but the listed statements below define it most accurate for **us**:

- Systemic thinking about design (Miriam Suzanne)
- A common, shared language
- A flexible, modular and adjustable system without vendor lock-in
- Our Single Source of Truth

Check [Lyne](#lyne) what a *Design System* means for us specifically and how we define and describe a *Design System* in more depth.

<lyne-title level="3" text="Design System Core Team"></lyne-title>

The *[Lyne](#lyne) Design System Core Team* is a multidisciplinary (so far UX, Frontend) team consisting of: [Marius Bleuer](https://github.com/mbleuer), [Sabrina Heid](https://github.com/sabrinaheid), [Daniel Schindler](https://github.com/DanTheMen), [Florian Stuerzinger](https://github.com/florianstuerzinger), [Yves Tscherry](https://github.com/feerglas), [Michael Zumstein](https://github.com/4aficiona2)

<lyne-title level="3" text="Design Token"></lyne-title>

*Design Tokens* are design primitives. They contain actual values — design decisions — but can also be accompanied by metadata. *Design Tokens* are delivered through the [Design (Token) API](#design-token-api).

> Technically speaking: Design Tokens are organized lists of key-value pairs that describe design decisions, Cristiano Rastelli

This could be a color value, e.g. the `brand-color` within a certain format like `hex`.

<lyne-title level="3" text="Design (Token) API"></lyne-title>

The *Design Token API* — might also be called *Design API* — is the mechanism/interface to deliver all [Design Tokens](#design-token). The *Design Tokens* can have different formats and get delivered within the requested format depending on the consuming application

This could be:
- Icons
- Colors
  - sRGB
  - P3
- ...

<lyne-title level="3" text="GitHub"></lyne-title>

*GitHub* is world's leading software development platform. A code hosting platform for collaboration and version control. *GitHub* lets you (and others) work together on projects like the [Lyne](#lyne) Design System.

<lyne-title level="3" text="Lyne"></lyne-title>

*Lyne* is the product name of our [Design System](#design-system) — *Lyne Design System*.

Read our section [All about Lyne](/about) for a more detailed, **non-technical** understanding.

For a more in depth and **technical** understanding of *Lyne* check out our [Lyne on GitHub](https://github.com/lyne-design-system/lyne).

<lyne-title level="3" text="Lyne Components"></lyne-title>

*Lyne Components* are the building blocks of the [Lyne Design System](#lyne) and are based on standard compliant [Web Components](#web-components) compiled by [StencilJS](#stenciljs) and browsable through [Storybook](#storybook). In code context *Lyne Components* are always referred as `lyne-components`.

<lyne-title level="3" text="Netlify"></lyne-title>

*[Netlify](https://www.netlify.com/)* is an all-in-one platform for automating modern web projects. We use it as a static hosting platform and deploy our [Storybook](#storybook) build of [Lyne Components](#lyne-components) and our [Lyne Documentation](#lyne-documentation) to *Netlify*. Since Lyne Components are an open source project Netlify services are free of charge.

<lyne-title level="3" text="npm"></lyne-title>

*[npm](https://www.npmjs.com/)* stands for node package manager and is the world's largest software registry. The registry consists of shared code packages. [Lyne Components](#lyne-components) are published through and shared on *npm*. The latest build of Lyne Components can be found on *npm* as the [lyne-test](https://www.npmjs.com/package/lyne-test) package. For further instructions how to consume Lyne Components via *npm* read [DEVELOP.md](./DEVELOP.md).

<lyne-title level="3" text="Preview Deployment"></lyne-title>

A *Preview Deployment* is a deployment which is based on a branch ([see Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)) other than `master`. If you work on a `feature-branch`, every push to git will trigger a ci-build. After success, a *Preview Deployment* is made. In contrast to the [Production Deployment](#production-deployment), the *Preview Deployment* only creates a [Storybook](#storybook) build and deploys it on [Netlify](#netlify).

<lyne-title level="3" text="Production Deployment"></lyne-title>

A *Production Deployment* is a deployment which is made after a new version number got created, e.g. increasing from 2.1.0 to 2.1.1 or from 2.1.0 to 3.0.0. During a *Production Deployment* different deployments are made to different instances:
- npm: all Stencil components
- Netlify: Storybook containing all Stencil components

<lyne-title level="3" text="Single Source of Truth"></lyne-title>

Definitions should only live in one place to ensure their accuracy. We define as our *Single Source of Truth* (**SSoT**) the [Design (Token) API](#design-token-api) which delivers always valid, unique [Design Tokens](#design-token).

<lyne-title level="3" text="StencilJS"></lyne-title>

*[Stencil](https://stenciljs.com/)* is an open source tool chain for building small, fast and standard compliant [Web Components](#web-components) — our [Lyne Components](#lyne-components) — which then power the [Lyne Design System](#lyne). *Stencil* is an integral part of Lyne. But *Stencil* is not a framework, it's a tool — a compiler — which generates plain, reusable Web Components. Since it is a compiler it can also generate framework specific wrappers and their corresponding bindings — called  [output targets](https://stenciljs.com/docs/output-targets). Output targets exist for [various frameworks](https://github.com/ionic-team/stencil-ds-plugins) — also called plugins — and are also used to generate the component documentation.

<lyne-title level="3" text="TODO"></lyne-title>

Output targets need a better, more generic description since they are the base for dist too ...

<lyne-title level="3" text="Storybook"></lyne-title>

*[Storybook](https://storybook.js.org)* is an open source tool for developing UI components in isolation. Besides being valuable during the development phase it is also used as a [Component Browser](#component-browser) for a wider, less technical audience. All our [Lyne Components](#lyne-components) are browsable through through *Storybook*. The latest *Storybook* release of Lyne Components can be found on [Netlify](https://lyne-components-storybook.netlify.com).

<lyne-title level="3" text="Web Components"></lyne-title>

*[Web Components](https://www.webcomponents.org/specs)* are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. *Web components* are based on existing web standards and are framework agnostic hence they do not have any dependency on a JavaScript framework and therefore will never be outdated. [Lyne Components](#lyne-components) are based on standard compliant *Web Components*.

<lyne-title level="2" text="TBD"></lyne-title>

<lyne-title level="3" text="Lyne Documentation"></lyne-title>

*Lyne Documentation* is the documentation platform for everything [Lyne](#lyne) related. The platform documents design principles, guidelines, lists all [Design Tokens](#design-token), all [Lyne Components](#lyne-components) with their variations.
The documentation is generated by [Gridsome](#gridsome), a [Static Site Generator](#static-site-generator), which pulls content from [Dato CMS](#dato-cms) via [GraphQL](#graphql) and aggregates them with [Lyne Components](#lyne-components) specific data. This gets all generated during build-time, triggered by a content change in [Dato CMS](#dato-cms) or by a [Lyne Components](#lyne-components) change, then gets deployed to [Netlify](#netlify) to the mentioned link below once the build ran successfully.

[Lyne Documentation on Netlify](https://lyne-documentation.netlify.app).

<lyne-title level="3" text="Documentation CMS"></lyne-title>


<lyne-title level="3" text="Dato CMS"></lyne-title>


<lyne-title level="3" text="Static Site Generator"></lyne-title>


<lyne-title level="3" text="Gridsome"></lyne-title>


<lyne-title level="3" text="GraphQL"></lyne-title>


<lyne-title level="3" text="Visual Regression Test"></lyne-title>


<lyne-title level="3" text="Chromatic"></lyne-title>


<lyne-title level="3" text="Pull Request"></lyne-title>


<lyne-title level="3" text="Storybook Story"></lyne-title>

