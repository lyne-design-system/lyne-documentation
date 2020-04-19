<template>
  <Layout>
    <h1>Lyne Components</h1>

    <ul
      v-for="({ node: comp}) in $static.allDatoCmsComponent.edges"
      :key="comp.id"
    >

      <li>

        <g-link :to="`/components/${comp.componentName}`">
          {{comp.title}} ({{comp.componentName}})
        </g-link>

      </li>

    </ul>

  </Layout>
</template>

<static-query>
  query {
    allDatoCmsComponent {
      edges {
        node {
          id
          title
          componentName
        }
      }
    }
  }
</static-query>

<style>
</style>
