<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`posts.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
 
  .post-item-footer, .post-item-title{
    font-family: Verdana, sans-serif;
  }

  .post-item-title {
    font-size: 1.5em;
    font-weight: 600;
  }

  .post-item-date {
    color: #AAA;
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }
</style>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<div class="container">
  <h1>Posts</h1>
  {#each posts as post, index}
    <div class="post-item">
      <h2 class="post-item-title">
        <a rel='prefetch' href='posts/{post.slug}'>{post.title}</a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
