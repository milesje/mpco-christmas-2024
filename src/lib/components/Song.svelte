<script>
  export let data = null
</script>

{#if data}
  <div class="flex flex-row w-full items-center justify-center">
    <span class="grow m-2 italic">{data.song}</span><span class="grow m-2 text-right italic">{data.composer}</span>
  </div>
{/if}
