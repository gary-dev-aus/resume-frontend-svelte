<script>
  import { gql } from "@apollo/client/core";
  import { query } from "svelte-apollo";

  const HOMEPAGE = gql`
    query GetHomepage {
      homepage {
        data {
          attributes {
            heroMain
            heroSupport
          }
        }
      }
    }
  `;

  const homepage = query(HOMEPAGE);
  // let data;

  // homepage.subscrive((data) => {
  //   data = data;
  // });

  console.log(homepage);
</script>

<h1>homepage</h1>
<!-- {#if !$homepage.loading && !$homepage.error} -->
{homepage.data?.attributes.heroMain}
<!-- {/if} -->
