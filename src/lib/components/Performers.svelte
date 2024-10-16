<script>
  import Performer from '$lib/components/Performer.svelte'
  export let performers = null
</script>

{#if performers}
  <span class="text-center text-2xl italic bold">Violin</span>
  {#each performers.filter((item) => item.instrument === 'Violin') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Viola</span>
  {#each performers.filter((item) => item.instrument === 'Viola') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Chelo</span>
  {#each performers.filter((item) => item.instrument === 'Chelo') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Bass</span>
  {#each performers.filter((item) => item.instrument === 'Bass') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Flute</span>
  {#each performers.filter((item) => item.instrument === 'Flute') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Clarinet</span>
  {#each performers.filter((item) => item.instrument === 'Clarinet') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Trumpet</span>
  {#each performers.filter((item) => item.instrument === 'Trumpet') as performer}
    <Performer bind:data={performer} />
  {/each}
  <span class="text-center text-2xl italic bold">Trombone</span>
  {#each performers.filter((item) => item.instrument === 'Trombone') as performer}
    <Performer bind:data={performer} />
  {/each}
{/if}
