import { PUBLIC_STRAPI_ENDPOINT as urlBase } from "$env/static/public";
import { writable } from "svelte/store";

// export const projectStore = writeable([]);

// export async function loadProjects() {
//   const response = await fetch(`${apiUrl}/projects`);
//   const projects = response.json();

//   projectStore.set(projects);
// }
export const knowledgeStore = writable([]);

async function fetchKnowledge() {
  // const url = "http://localhost:1337/api/knowledges";
  const url = `${urlBase}/api/knowledges?populate=logo`;
  const res = await fetch(url);
  const resJson = await res.json();
  const loadedKnowledges = resJson.data.map((knowledge) => {
    return {
      title: knowledge.attributes.title,
      id: knowledge.id,
      type: knowledge.attributes.type,
      details: knowledge.attributes.details,
      score: knowledge.attributes.score,
      logo: knowledge.attributes.logo.data.attributes,
    };
  });

  knowledgeStore.set(loadedKnowledges);
}
fetchKnowledge();
