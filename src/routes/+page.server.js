import { PUBLIC_STRAPI_ENDPOINT as urlBase } from "$env/static/public";

export async function load({ fetch }) {
  const response = await fetch(`${urlBase}/api/homepage`);
  const homepage = await response.json();

  return {
    homepage,
  };
}
