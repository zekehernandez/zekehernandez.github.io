<script>
  export let segment;
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Verdana, sans-serif;
    /* font-weight: 700; */
    justify-content: flex-end;
    /* text-transform: uppercase;/ */
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #1d9e9e;
  }
</style>

<nav>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>About</a>
  <a rel=prefetch class='{segment === "posts" ? "selected" : ""}' href='posts'>Posts</a>
</nav>
