<script>
  import { knowledgeStore } from "$lib/stores/knowledgeStore";
  import Image from "$lib/components/image";

  let knowledgeTypes = [];

  $: knowledgeTypes = [
    ...new Set($knowledgeStore.map((knowledge) => knowledge.type)),
  ];

  // console.log($knowledgeStore, knowledgeTypes, knowledgeTypes.length >= 1);
</script>

<h1>knowledge</h1>
{#if knowledgeTypes.length >= 1}
  {#each knowledgeTypes as knowledgeType (knowledgeType)}
    <h2>
      {knowledgeType}
    </h2>
    <ul>
      {#each $knowledgeStore as knowledge (knowledge.id)}
        <li>
          <p>{knowledge.score}</p>
          <h3>{knowledge.title}</h3>
          <Image />
        </li>
      {/each}
    </ul>
  {/each}
{/if}
