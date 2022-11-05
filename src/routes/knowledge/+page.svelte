<script>
  import { knowledgeStore } from "$lib/stores/knowledgeStore";
  import Image from "$lib/components/image.svelte";

  let knowledgeTypes = [];

  $: knowledgeTypes = [
    ...new Set($knowledgeStore.map((knowledge) => knowledge.type)),
  ];

  // console.log($knowledgeStore);
</script>

<h1>knowledge</h1>
{#if knowledgeTypes.length >= 1}
  {#each knowledgeTypes as knowledgeType (knowledgeType)}
    <h2>
      {knowledgeType}
    </h2>
    <ul>
      {#each $knowledgeStore.filter((knowledge) => knowledge.type === knowledgeType) as knowledge (knowledge.id)}
        <li>
          <p>{knowledge.score}</p>
          <h3>{knowledge.title}</h3>
          <Image image={knowledge.logo} />
        </li>
      {/each}
    </ul>
  {/each}
{/if}
