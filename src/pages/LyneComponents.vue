<template>
  <Layout>
    <h1>Lyne Components</h1>

    <ul>

      <li
        v-for="(comp) in $page.lyne.allComponents"
        :key="comp.id"
      >

        <g-link :to="$tp(`/lyne-components/${comp.componentName}/`)">
          {{comp.title}} ({{comp.componentName}})
        </g-link>

      </li>

    </ul>

  </Layout>
</template>

<page-query>
  query {
    lyne {
      allComponents {
        id
        title
        componentName
      }
    }
  }
</page-query>

<style>
</style>
