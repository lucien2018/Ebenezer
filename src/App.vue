<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
      dark
    >
     <v-list-item>
      <v-list-item-content>
        <v-list-item-title>     
          <router-link to='/' class="lien">Acceuil</router-link> 
        </v-list-item-title>
        <v-list-item-title>                            
          <router-link to='/services' class="lien">Nos services</router-link> 
        </v-list-item-title>
        <v-list-item-title>                 
          <router-link to='/realisation' class="lien">Nos réalisations</router-link>
        </v-list-item-title>
        <v-list-item-title>                     
          <router-link to='/equipe' class="lien">Notre Equipe </router-link>
        </v-list-item-title>
        <v-list-item-title>                   
          <router-link to='/contact' class="lien">Contact</router-link> 
        </v-list-item-title>
      </v-list-item-content>
     </v-list-item>
    
        </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
      class="blue lighten-3"
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
        <v-toolbar-title>
          EBENEZER
        </v-toolbar-title>
      
    </v-app-bar>

    <v-content>
       <router-view></router-view>
    </v-content>

    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
        model: null,
        type: 'temporary',
        clipped: true,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
      
    })
  }
</script>

<style scoped>

.lien{
text-decoration: none;
color: white;
font-size: 25px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu
}
</style>