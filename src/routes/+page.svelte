<script>
  import Performer from '$lib/components/Performer.svelte'
  import MediaQuery from 'svelte-media-queries'
  import { assets, base, resolveRoute } from '$app/paths'

  let performers = [
    { name: 'Tyler Miles', position: '', instrument: 'Viola' },
    { name: 'Caleb Miles', position: '', instrument: 'Bass' },
    { name: 'Lachlan Miles', position: '', instrument: 'Chelo' },
    { name: 'John Doe', position: '', instrument: 'Violin' },
    { name: 'Jane Doe', position: '', instrument: 'Bass' },
    { name: 'Johnny Doe', position: '', instrument: 'Violin' }
  ]
</script>

<section class="bg-[#FCF5E5]">
  <MediaQuery query={['(max-width: 768px)', '(min-width: 768px) and (max-width: 1280px)', '(min-width: 1280px)']} let:matches>
    {@const [mobile, tablet, desktop] = matches}
    <!-- <h5>
			mobile: '(max-width: 768px)' = {mobile}<br><br>
			tablet: '(max-width: 1280px)' = {tablet}<br><br>
			desktop: '(min-width: 1280px)' = {desktop}
		</h5> -->
    <div class="flex flex-col pt-8 justify-start items-center min-h-[100vh]">
      <img src="{base}/MPCO-Christmas-2024.png" alt="MPCO" />
    </div>
    <br />
    <div class="flex flex-col items-center min-h-[100vh]">
      <span class="text-2xl italic bold">~~~~~ Songs ~~~~~</span>

      <div class="flex flex-row w-full items-center justify-center">
        <span class="grow m-3">The Nutcracker </span><span class="grow m-3 text-right"> Pyotr Ilyich Tchaikovsky</span>
      </div>
      <div class="flex flex-row w-full items-center justify-center">
        <span class="grow m-3">Troika </span><span class="grow m-3 text-right"> Sergei Prokofiev</span>
      </div>
      <div class="flex flex-row w-full items-center justify-center">
        <span class="grow m-3">Carol Symphony </span><span class="grow m-3 text-right"> Victor Hely</span><span>Hutchinson</span>
      </div>
      <div class="flex flex-row w-full items-center justify-center">
        <span class="grow m-3">Christmas Greeting </span><span class="grow m-3 text-right"> Edward Elgar</span>
      </div>
      <div class="flex flex-row w-full items-center justify-center">
        <span class="grow m-3">Christmas Overture </span><span class="grow m-3 text-right"> Samuel Coleridge</span><span>Taylor</span>
      </div>
      <div class="flex flex-row w-full items-center justify-center">
        <span class="grow m-3">Sleigh Ride </span><span class="grow m-3 text-right"> Leopold Mozart</span>
      </div>
    </div>

    <div class="flex flex-col min-h-[100vh]">
      <div class="flex flex-col items-center">
        <span>~~~~~ Performers ~~~~~</span>
      </div>
      <span class="text-2xl italic bold">Violin</span>
      {#each performers.filter((item) => item.instrument === 'Violin') as performer}
        <Performer bind:data={performer} />
      {/each}
      <span class="text-2xl italic bold">Viola</span>
      {#each performers.filter((item) => item.instrument === 'Viola') as performer}
        <Performer bind:data={performer} />
      {/each}
      <span class="text-2xl italic bold">Chelo</span>
      {#each performers.filter((item) => item.instrument === 'Chelo') as performer}
        <Performer bind:data={performer} />
      {/each}
      <span class="text-2xl italic bold">Bass</span>
      {#each performers.filter((item) => item.instrument === 'Bass') as performer}
        <Performer bind:data={performer} />
      {/each}
    </div>

    <div class="flex flex-col items-center min-h-[100vh] space-y-2">
      <span>~~~~~ Advertisments ~~~~~</span>
      <img src="{base}/advertising1.png" alt="advertising1" />
      <img src="{base}/Advertising-3.jpg" alt="advertising1" />
      <img src="{base}/ads-2.jpg" alt="advertising1" />
    </div>
  </MediaQuery>
</section>
