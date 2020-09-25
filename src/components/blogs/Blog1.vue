<template>
  <div class="blogpost">
    <h2>Hello world!</h2>
    This is my <i>first</i> <b>ever</b> blog post!
    <div v-highlight>
      <pre><code class="java">public static void main(String[] args) {
  System.out.println("Hello world!");
}</code></pre>
      <pre><code class="c++">#include &lt;iostream&gt;

using namespace std;

int main() {
  cout &lt;&lt; "Hello world!" &lt;&lt; endl;
}</code></pre>
      <pre><code class="php">&lt;?php
  echo "Hello world!\n";
?&gt;</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog1"
};
</script>
