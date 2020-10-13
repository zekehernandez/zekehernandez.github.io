<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    margin-bottom: 0.5em;
  }

  span {
    font-size: 1.2em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  .icon-list a {
    margin-left: 1em;
  }

  @media (max-width: 1020px) {
    span {
      font-size: 1em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>Zeke Hernandez</title>
  <script src="https://kit.fontawesome.com/713b640613.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Hey, my name is <a href="/about">Zeke</a>, and I'm a software engineer.</h1>
    <span class="icon-list">
      <span>See what I've been up to:</span>
      <a href="https://github.com/zekehernandez"><i class="fab fa-lg fa-github"></i></a>
      <a href="https://stackoverflow.com/users/6014489/zeke-hernandez"><i class="fab fa-lg fa-stack-overflow"></i></a>
      <a href="https://www.linkedin.com/in/zeke-hernandez-08272162/"><i class="fab fa-lg fa-linkedin"></i></a>
      </span>
  </div>


  <figure>
    <img alt='Some shapes' src='shape.png'>
  </figure>
</div>
