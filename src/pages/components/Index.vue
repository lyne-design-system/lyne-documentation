<template>
  <Layout>

    <section class="section">
      <div class="content">
        <h1 class="title is-1">Components</h1>

        <ul>
          <li
            v-for="(comp) in $data.components"
            :key="comp.name"
          >
            <g-link :to="'components/' + comp.name">{{comp.name}}</g-link>
          </li>
        </ul>

      </div>
    </section>

  </Layout>
</template>

<script>
import components from '../../components';

export default {
  data() {
    return {
      components
    };
  }
};
</script>
