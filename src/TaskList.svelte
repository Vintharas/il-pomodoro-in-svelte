<script>
  const tasks = [
    "plan some fun trip with Teo",
    "buy some flowers to my wife",
    "write an article about Svelte"
  ];
</script>

<style>
  ul {
    list-style: none;
  }
</style>

<ul>
  {#each tasks as task}
    <li>{task}</li>
  {/each}
</ul>
