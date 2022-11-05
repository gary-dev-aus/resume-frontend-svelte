<script>
  export let data;
  import { projectStore } from "$lib/stores/projectStore";

  // console.log(data, $projectStore);

  const project = $projectStore.filter(
    (project) => project.slug === data.slug
  )[0];
  // console.log(project);
</script>

<h1>{project.title}</h1>
<p>{project.details}</p>
