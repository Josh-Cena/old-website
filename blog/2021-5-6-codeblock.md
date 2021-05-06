---
title: Interactive code block!
author: Joshua Chen
author_url: https://github.com/Josh-Cena
author_image_url: https://avatars.githubusercontent.com/u/55398995?s=460&u=88dc0dcb0691877524dd8739db9fde7ed4fa9721&v=4
tags: [personal page, front end]
---

**Hey!**

I just found it fun to include an interactive code block.

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

Try it out with your own code in React!
