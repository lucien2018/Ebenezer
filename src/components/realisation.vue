<template>
   <div>
     <ul
     v-for="(post,i) in posts"
      :key="i"
     >
      <li>{{post.title}}</li>
        <ul>
          <li>{{post.tags}}</li>
        </ul>
     </ul>
   </div>
</template>
<script>
export default {
    name: 'realisation'
    data: () => ({
       /* tags: [
           {item: 'tag1'},
           {item: 'tag2'},
           {item: 'tag3'}
        ],*/
        posts:[
            {
              id:1, 
              title:'Mon premier article', 
              tags:['tag1']
            },
            {
              id:2, 
              title:'Mon deuxième article', 
              tags:['tag2','tag3']
            },
            {
              id:3, 
              title:'Mon troisième article', 
              tags:['tag1','tag4']
            },
        ]
        
    })
}
</script>