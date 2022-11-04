<script>
  import "../app.css";
  import Header from "../lib/components/header.svelte";

  import { PUBLIC_GRAPHQL_ENDPOINT as graphqlEndpoint } from "$env/static/public";

  import { ApolloClient, InMemoryCache } from "@apollo/client/core";
  import { setClient } from "svelte-apollo";

  export const client = new ApolloClient({
    uri: graphqlEndpoint,
    cache: new InMemoryCache(),
  });

  setClient(client);
</script>

<Header />
<slot />
