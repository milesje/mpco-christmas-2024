<script>
  export let data = null
</script>

{#if data}
  <div class="border shadow m-1 p-1 bg-white">
    <span>{data.name}</span>
    <span>{data.position}</span>
  </div>
{/if}
