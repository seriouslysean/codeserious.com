<template>
  <div class="container">
    <h1 class="title">code<i class="title__half">serious</i></h1>

    <div class="links">
      <a
        class="links__link"
        title="Facebook"
        href="https://www.facebook.com/seriouslysean"
        >Facebook</a
      >
      <a
        class="links__link"
        title="Twitter"
        href="https://www.twitter.com/seriouslysean"
        >Twitter</a
      >
      <a
        class="links__link"
        title="GitHub"
        href="https://www.github.com/seriouslysean"
        >GitHub</a
      >
      <a
        class="links__link"
        title="LinkedIn"
        href="https://www.linkedin.com/in/seriouslysean"
        >LinkedIn</a
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: 'Sean Kennedy, Developer',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            '&#34;I&#39;m just your friendly neighborhood web developer&#34;. -Sean Kennedy',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: #00151a;
  background: #cef4fe;
}

a {
  color: #02657f;
  text-decoration: none;

  &:active,
  &:visited,
  &:hover {
    color: #00151a;
    text-decoration: underline;
  }
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  text-transform: uppercase;
  color: #00151a;
  font-size: 3em;
  margin-bottom: 1em;

  &__half {
    color: #02657f;
    font-style: normal;
  }
}

.links {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item {
    display: inline;
    margin: 0;
    padding: 0;
  }

  &__link {
    display: inline-block;
    margin: 0 0.5em 1em;
  }
}
</style>
