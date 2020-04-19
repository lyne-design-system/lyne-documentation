<template>
  <Layout>

    <h1>{{$page.component.title}}</h1>

    <div
      v-for="({ node: comp}) in $page.variants.edges"
      :key="comp.id"
    >

      <h2>{{comp.title}}</h2>
      <p>{{comp.description}}</p>
    </div>
  </Layout>
</template>

<page-query>

query($compIdDate: Date!, $compIdString: ID!) {
  component: datoCmsComponent(id: $compIdString){
    title
  },
  variants: allDatoCmsComponentVariant(filter: { component: {eq: $compIdDate} }) {
    edges {
      node {
        id
        title
        description
      }
    }
  }
}
</page-query>

<style>
</style>
