<script>
  import { PUBLIC_STRAPI_ENDPOINT as urlEndpoint } from "$env/static/public";

  // Props
  export let image = undefined;

  image.url = image.url.replace("/uploads/", "");
  const urlUpload = urlEndpoint + "/uploads/";

  const breakpoints = {
    sm: "480",
    md: "800",
    lg: "1000",
  };

  console.log(image, urlUpload + image.url);
</script>

{#if image.url.endsWith(".svg")}
  <!-- svg -->
  <img src={urlUpload + image.url} alt={image.alternativeText} />
{:else}
  <!-- img -->
  <img
    srcset={`${urlUpload}small_${image.url} ${breakpoints.sm}w, ${urlUpload}medium_${image.url} ${breakpoints.md}w, ${urlUpload}large_${image.url} ${breakpoints.lg}w`}
    src={urlUpload + image.url}
    alt={image.alternativeText}
  />
{/if}
