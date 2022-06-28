<template>
  <Layout>

    <section class="section">
      <div class="content">
        <sbb-title level="1" text="Components" class="page-title"></sbb-title>

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
import components from '@sbb-esta/lyne-components/dist/collection/storybundle/components.json';

export default {
  data() {
    return {
      components
    };
  }
};
</script>
