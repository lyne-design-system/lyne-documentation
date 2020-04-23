<template>
  <Layout>
    <div class="container">
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
          >
            <a
              :href="tab.href"
              @click="selectTab(tab)"
              :class="[tab.isActive
                ? 'tab-list-item-link is-active'
                : 'tab-list-item-link']"
            >{{tab.name}}</a>
          </li>
        </ul>
      </div>

      <!-- Tabs content -->
      <section
        v-for="(tab, index) in $data.tabs"
        :id="tab.id"
        :key="index"
        :class="[tab.isActive
          ? 'section is-active'
          : 'section']"
      >
        <ul>
          <li
            class="list-item"
            v-for="(deployment) in $data.deployments[tab.id]"
            :key="deployment.date"
          >
            <span class="list-item-title">Branch: {{deployment.tag}}</span>
            <a
              class="list-item-link"
              :href="deployment.url"
            >View</a>
            <span class="list-item-date">{{formatDate(deployment.date)}}</span>
          </li>
      </ul>
      </section>

    </div>
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
        prod: null
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
body {
  margin: 20px;
}

a {
  text-decoration: none;
  color: #c60018;
  transition: color 100ms ease-in;
}

a:hover {
  color: #eb0000;
}

ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.info {
  border-bottom: 1px solid #000;
  padding-bottom: 40px;
  margin-bottom: 40px;
}

.tabs {
  padding: 20px 0;
}

.tab-list {
  overflow: auto;
}

.tab-list-item {
  display: block;
  float: left;
}

.tab-list-item:not(:first-child) {
  margin-left: 20px;
}

.tab-list-item-link {
  display: block;
  padding: 10px;
  background-color: #ffffff;
  transition-duration: 100ms;
  transition-timing-function: ease-in;
  transition-property: background-color, color;
}

.tab-list-item-link.is-active {
  background-color: #eb0000;
  color: #ffffff;

}

.section:not(.is-active) {
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
