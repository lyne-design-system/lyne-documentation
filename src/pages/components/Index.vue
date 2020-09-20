<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Lyne Components</h1>

        <div class="content">
          <ul>

            <li
              v-for="(comp) in $page.lyne.allComponents"
              :key="comp.id"
            >

              <g-link :to="`/components/${comp.componentName}/`">
                {{comp.title}} ({{comp.componentName}})
              </g-link>

            </li>

          </ul>
        </div>
      </div>
    </section>

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
