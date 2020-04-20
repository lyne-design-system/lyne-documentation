<template>
  <Layout>
    <h1>{{$page.component.component.title}}</h1>

    <div
      v-for="(comp) in $page.variants.allComponentVariants"
      :key="comp.id"
    >
      <hr>
      <h2>{{comp.title}}</h2>
      <p>{{comp.description}}</p>

      <h3>Preview</h3>
      <component
        v-bind:is="$page.component.component.componentName"
        v-bind="comp.properties"
      ></component>

    </div>

  </Layout>
</template>

<page-query>

query($compId: lyneTypes_ItemId) {
  component: lyne {
    component(filter: {id: {eq: $compId}}) {
      title
      componentName
    }
  },
  variants: lyne {
    allComponentVariants(filter: { component: {eq: $compId} }) {
      id
      title
      description
      properties
    }
  }
}
</page-query>

<style>
</style>
