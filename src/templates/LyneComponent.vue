<template>
  <Layout>
    test
    <h1>{{$page.component.component.title}}</h1>

    <div
      v-for="(comp) in $page.variants.allComponentVariants"
      :key="comp.id"
    >

      <h2>{{comp.title}}</h2>
      <p>{{comp.description}}</p>
    </div>

  </Layout>
</template>

<page-query>

query($compId: lyneTypes_ItemId) {
  component: lyne {
    component(filter: {id: {eq: $compId}}) {
      title
    }
  },
  variants: lyne {
    allComponentVariants(filter: { component: {eq: $compId} }) {
      id
      title
      description
    }
  }
}
</page-query>

<style>
</style>
