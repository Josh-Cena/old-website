<template>
  <div class="editor">
    <h1>Type your math formula below:</h1>
    <div id="text">
      <textarea
        id="input"
        placeholder="Input TeX formula here."
        v-model="formula"
      ></textarea>
      <div id="output">$${}$$</div>
    </div>
  </div>
</template>

<script>
// import MathJax from "mathjax";
export default {
  data: function() {
    return {
      formula: ""
    };
  },
  watch: {
    formula: function(newVal) {
      // var math = MathJax.Hub.getAllJax("output")[0];
      // console.log(math);
      // MathJax.Hub.Queue(function() {
      //   var math = MathJax.Hub.getAllJax("output")[0];
      //   MathJax.Hub.Queue(["Text", math, newVal]);
      // });
      document.getElementById("output").innerHTML = newVal;
    }
  }
};
</script>

<style scoped>
#input {
  width: 90%;
  box-sizing: border-box;
  background: #ffffff;
  padding: 1em;
  margin: 0;
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#output {
  margin: auto;
  box-sizing: border-box;
  display: table;
  margin-top: 40px;
  width: 90%;
}
#output > div {
  display: table-cell;
  vertical-align: middle;
}
</style>
