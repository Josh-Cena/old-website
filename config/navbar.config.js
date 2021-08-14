module.exports = {
  title: "Josh-Cena",
  logo: {
    alt: "JC",
    src: "/img/logo.svg",
    srcDark: "/img/logo-dark.svg",
  },
  items: [
    { to: "profile", label: "Profile", position: "left" },
    {
      label: 'Tools',
      position: 'left',
      items: [
        {
          label: 'Todo list',
          to: 'todo',
        },
        {
          label: 'Color converter',
          to: 'colorconvert',
        },
      ],
    },
    {
      type: "doc",
      label: "Docs",
      docId: "about",
      position: "left",
    },
    { to: "blog", label: "Blog", position: "left" },
    {
      type: "localeDropdown",
      position: "right",
    },
  ],
};
