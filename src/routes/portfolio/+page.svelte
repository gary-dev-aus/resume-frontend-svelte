<script>
  import { projectStore } from "$lib/stores/projectStore";

  // console.log($projectStore);
  // export let data;
  // console.log($data);

  // const projects = data.projects.data;
</script>

<h1>portfolio</h1>
{#each $projectStore as project (project.id)}
  <a href={`/portfolio/${project.slug}`}>
    <h2>{project.title}</h2>
    <ul>
      {#if project.isDesigner}
        <li>designer</li>
      {/if}
      {#if project.isDeveloper}
        <li>developer</li>
      {/if}
    </ul>
  </a>
{/each}
