import { PUBLIC_STRAPI_ENDPOINT as urlBase } from "$env/static/public";
import { writable } from "svelte/store";

export const projectStore = writable([]);

async function fetchProjects() {
  const url = `${urlBase}/api/projects`;
  const res = await fetch(url);
  const resJson = await res.json();
  const loadedProjects = resJson.data.map((project) => {
    return {
      title: project.attributes.title,
      id: project.id,
      slug: project.attributes.slug,
      isDesigner: project.attributes.isDesigner,
      isDeveloper: project.attributes.isDeveloper,
      details: project.attributes.details,
    };
  });

  projectStore.set(loadedProjects);
}
fetchProjects();
