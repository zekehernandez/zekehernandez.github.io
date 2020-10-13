<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`posts/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #AAA;
    font-family: Verdana, sans-serif;
    font-weight: 600;
    font-size: 1em;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<header>
  <p>{post.printDate}</p>
  <h1>{post.title}</h1>
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
</div>
