<template>
    <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
   <v-list
     v-for="(post,i) in posts"
     :key="i"
   >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{blog.title}}</v-list-item-title>
        <v-list-item-subtitle>{{blog.tag}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   </v-list>
  </v-card>
</template>
<script>
export default {
    data: () => ({
        posts:[
            {
              id:1, 
              title:'Mon premier article', 
              //tags:['tag1']
            },
            {
              id:2, 
              title:'Mon deuxième article', 
              //tags:['tag2','tag3']
            },
            {
              id:3, 
              title:'Mon troisième article', 
              //tags:['tag1','tag4']
            },
        ]
        
    })
}
</script>