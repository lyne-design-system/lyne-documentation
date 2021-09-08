<template>
  <Layout>

    <section class="section">
      <div class="content">
        <lyne-title level="1" text="Components" class="page-title"></lyne-title>

        <ul>
          <li
            v-for="(comp) in $data.components.components"
            :key="comp"
          >
            <g-link :to="'components/' + comp">{{comp}}</g-link>
          </li>
        </ul>

      </div>
    </section>

  </Layout>
</template>

<script>
import components from 'lyne-test/dist/collection/storybundle/components.json';

export default {
  data() {
    return {
      components
    };
  }
};
</script>
