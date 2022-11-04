import { STRAPI_API_ENDPOINT as apiUrl } from "$env/static/private";

export async function load({ fetch }) {
  const response = await fetch(`${apiUrl}/projects`);
  const projects = await response.json();

  return {
    projects,
  };
}
