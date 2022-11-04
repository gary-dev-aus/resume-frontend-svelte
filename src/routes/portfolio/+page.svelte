<script>
  import { set_attributes } from "svelte/internal";

  export let data;

  const projects = data.projects.data;
</script>

<h1>portfolio</h1>
{#each projects as project (project.id)}
  <a href={`/portfolio/${project.attributes.slug}`}>
    <h2>{project.attributes.title}</h2>
    <ul>
      {#if project.attributes.isDesigner}
        <li>designer</li>
      {/if}
      {#if project.attributes.isDeveloper}
        <li>developer</li>
      {/if}
    </ul>
  </a>
{/each}
