# OpenComponent Demo

## Install the cli

```sh
npm install oc -g
# to see available commands:
oc
```

## Get Started

```sh
npm install oc -g
oc dev . 3030
```

To see how the component looks like when consuming it:

```sh
oc preview http://localhost:3030/<your-component-name>
```

**Do not use VSCode** and run the following command line to view consuming components:

```sh
python -m http.server 8000
```

## Initialize a component

Initialize a component with a template and follow the CLI instructions:

```sh
$ oc init <your-component-name> <template>
```

Here are some templates you can use:

- oc-template-handlebars
- oc-template-jade
- oc-template-es6
- oc-template-react
- oc-template-typescript-react

## Setup a Registry

The registry is a REST api that serves the components. You can have multiple registries connected to a library, but you can't have multiple libraries connected to a registry.

https://github.com/opencomponents/oc/wiki/Registry

## Consuming components

From a consumer's perspective, a component is an HTML fragment. You can render components just on the client-side, just on the server-side, or use the client-side rendering as failover strategy for when the server-side rendering fails (for example because the registry is not responding quickly or is down).

You don't need node.js to consume components on the server-side. The registry can provide you rendered components so that you can consume them using any tech stack.

When published, components are immutable and semantic versioned. The registry allows consumers to get any version of the component: the latest patch, or minor version, etc.

For more information about Consuming components, look at [this page](https://github.com/opencomponents/oc/wiki#consuming-components).
