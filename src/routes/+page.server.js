import { STRAPI_API_ENDPOINT as apiUrl } from "$env/static/private";

export async function load({ fetch }) {
  const response = await fetch(`${apiUrl}/homepage`);
  const homepage = await response.json();

  return {
    homepage,
  };
}
