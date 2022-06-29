<template>
  <Layout>
    <section class="section">
      <div class="container">
        <sbb-title level="1" text="Releases" class="page-title"></sbb-title>

        <p>Here you can find all production releases and preview builds for <code>lyne-components</code> linked with their corresponding Storybook release.</p>

        <div
          id="tabs"
          class="tabs"
        >

          <!-- Tab list -->
          <ul class="tab-list">
            <li
              v-for="(tab, index) in $data.tabs"
              :key="index"
              class="tab-list-item"
              v-bind:class="{'is-active': tab.isActive}"
              @click="selectTab(tab)"
            >
              <a>{{tab.name}}</a>
            </li>
          </ul>
        </div>

        <!-- Tabs content -->
        <div
          v-for="(tab, index) in $data.tabs"
          :id="tab.id"
          :key="index"
          :class="[tab.isActive
            ? 'tab-section is-active'
            : 'tab-section']"
        >
          <ul>
            <template v-for="(deployment) in $data.deployments[tab.id]">
              <li
                v-if="deployment.date !== ''"
                class="list-item"
                :key="deployment.date"
              >
                <span class="list-item-title">{{tab.id === 'production' ? 'Version' : 'Branch'}}: {{deployment.tag}}</span>
                <a
                  class="list-item-link"
                  :href="deployment.url"
                >View</a>
                <span class="list-item-date">{{formatDate(deployment.date)}}</span>
              </li>
              <template v-else>
                No elements.
              </template>
            </template>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  allDeployments {
    edges {
      node {
        production {
          tag
          date
          url
        }
        preview {
          tag
          date
          url
        }
      }
    }
  }
}
</page-query>

<script>

export default {
  created() {
    const deploymentsContent = this.$page.allDeployments.edges;

    this.deployments = {};

    if (deploymentsContent.length === 1) {
      this.deployments.production = deploymentsContent[0].node.production;
      this.deployments.preview = deploymentsContent[0].node.preview;
    }
  },

  data() {
    return {
      deployments: {
        preview: null,
        production: null
      },
      tabs: [
        {
          href: '#production',
          id: 'production',
          isActive: true,
          name: 'Production'
        },
        {
          href: '#preview',
          id: 'preview',
          isActive: false,
          name: 'Preview'
        }
      ]
    };
  },
  methods: {

    // format date in human readable format
    formatDate(dateString) {
      const dateObject = new Date(dateString);
      const dateOptions = {
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };

      const formattedDate = dateObject.toLocaleDateString('en-US', dateOptions);

      return formattedDate;
    },

    // handle tab click
    selectTab(selectedTab) {
      // set active class on tab item
      this.tabs.forEach((tab) => {

        /* eslint-disable no-param-reassign */
        tab.isActive = (tab.id === selectedTab.id);
        /* eslint-enable no-param-reassign */
      });
    }
  }
};

</script>

<style lang="scss" scoped>
.tab-section:not(.is-active) {
  display: none;
}

.list-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 30px;
}

.list-item-title {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
}

.list-item-link {
  display: block;
  margin-left: 20px;
}

.list-item-date {
  display: block;
  flex: 100% 0 0;
  padding-top: 6px;
}

</style>
