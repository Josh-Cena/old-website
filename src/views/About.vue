<template>
  <div class="about">
    <h1>About me</h1>
    <img
      class="avatar"
      alt="Avatar"
      src="../assets/img/avatar.jpg"
      width="250px"
    />
    <br />
    <h2>
      陈思达
      <br />
      <small>Joshua Chen</small>
    </h2>
    <ul>
      <li>Current 11th grade student at SWFLA</li>
      <li>
        Current club leader of
        <a href="https://github.com/Computerization" target="_blank">
          Computerization
        </a>
      </li>
      <li>
        Developer of
        <a href="https://github.com/Computerization/Enspire" target="_blank">
          Enspire
        </a>
      </li>
      <li><b>Not</b> an anime lover</li>
      <li>Hardcore MINECRAFTer / Lay Clash Royale player</li>
    </ul>
    <ul class="links">
      <li>
        <a href="https://github.com/Josh-Cena" target="_blank">
          <img
            class="icon"
            alt="Github"
            src="../assets/img/github.svg"
            width="24"
          />
        </a>
      </li>
      <li>
        <a href="mailto:joshcena@qq.com" target="_blank">
          <img
            class="icon"
            alt="Mail"
            src="../assets/img/mail.svg"
            width="24"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.about {
  background-color: white;
  height: 100%;
  width: 100%;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 3pt;
}
.avatar {
  border-radius: 50%;
}
.links {
  margin-top: 20pt;
}
.links li {
  display: inline;
  margin: 10pt;
}
</style>
