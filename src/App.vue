<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify logo"
          class="shrink mr-2 logo"
          contain
          transition="scale-transition"
          src="@/assets/img/logo.svg"
          width="40px"
        />
        <v-toolbar-title>Josh-Cena</v-toolbar-title>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary fixed bottom>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Contents
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-subheader>Tools</v-subheader>
          <v-list-item
            v-for="item in drawerItems"
            :key="item.title"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  border-radius: 20%;
  background-color: white;
  margin-left: 20px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    drawerItems: [
      { title: "Math editor", icon: "mdi-view-dashboard", to: "/editor" },
      { title: "Playlist", icon: "mdi-calendar", to: "/music" },
      { title: "Blogs", icon: "mdi-home", to: "/blog" }
    ]
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
