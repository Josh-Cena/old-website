<template>
  <div class="home">
    <HelloWorld msg="This is Josh-Cena's webpage" />
    <div class="footer">
      <img alt="Logo" src="../assets/img/logo.png" width="40px" />
      <br /><span>Built with Vue</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
