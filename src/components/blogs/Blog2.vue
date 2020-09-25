<template>
  <div class="blogpost">
    <h2>Functions test</h2>
    Levels of headings:
    <h2>Heading</h2>
    <h3>Subheading</h3>
    <h4>Subsubheading</h4>
    <h5>Subsubheading</h5>
    Now can we insert a picture?
    <br /><img
      src="https://img.mp.itc.cn/q_70,c_zoom,w_640/upload/20161210/76517a5faaeb4fbf9e84c4923399bd46_th.jpg"
      width="100px"
    />
    <br />A link maybe?
    <a href="https://computerization.github.io" target="_blank">Join us here</a>
    <br />See if a list works:
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    Ordered list:
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
    A table:
    <table>
      <thead>
        <th>Col1</th>
        <th>Col2</th>
        <th>Col3</th>
      </thead>
      <tbody>
        <tr>
          <td>11</td>
          <td>12</td>
          <td>13</td>
        </tr>
        <tr>
          <td>21</td>
          <td>22</td>
          <td>23</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Blog2"
};
</script>
