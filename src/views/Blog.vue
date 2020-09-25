<template>
  <div class="blog">
    <h1>Blogs</h1>
    <component v-for="id in list" :is="id" :key="id"></component>
    <!-- <Blogpost v-for="post in posts" :key="post.id" :post="post" /> -->
  </div>
</template>

<script>
import Blog1 from "@/components/blogs/Blog1.vue";
import Blog2 from "@/components/blogs/Blog2.vue";

export default {
  name: "Blog",
  components: {
    Blog1,
    Blog2
  },
  data: function() {
    return {
      list: ["Blog1", "Blog2"]
    };
  }
};
</script>

<style scoped>
.blog {
  width: 100%;
  height: 100%;
}
.blogpost {
  padding: 1em 2em 3em;
  margin-bottom: 1em;
  text-align: left;
  background-color: white;
  box-sizing: border-box;
  width: 100%;
}
</style>
