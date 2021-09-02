<template>
  <Layout>

    <section class="section">
      <div class="content">
        <lyne-title level="1" text="Components" class="page-title"></lyne-title>

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
