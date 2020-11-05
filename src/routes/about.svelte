<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h1>About Me</h1>
  <figure>
    <img src='profile.jpg' alt='Me several years ago.'>
  </figure>
  <p>I'm a software engineer, I love to make robust software that's enjoyable to use.</p>
  <p>Front-end development is my specialty, React is my framework of choice.</p>
  <p>I'm currently located in Minnesota working for <a href="https://www.collage.com/">Collage.com</a> as a Senior Software Engineer.</p>
</div>
