<script>
  import Performer from '$lib/components/Performer.svelte'
  import Song from '$lib/components/Song.svelte'
  import MediaQuery from 'svelte-media-queries'
  import { assets, base, resolveRoute } from '$app/paths'

  let performers = [
    { name: 'Tyler Miles', position: '', instrument: 'Viola' },
    { name: 'Caleb Miles', position: '', instrument: 'Bass' },
    { name: 'Testy Miles', position: '', instrument: 'Chelo' },
    { name: 'John Doe', position: '', instrument: 'Violin' },
    { name: 'Jane Doe', position: '', instrument: 'Bass' },
    { name: 'Johnny Doe', position: '', instrument: 'Violin' },
    { name: 'Lachlan Miles', position: '', instrument: 'Flute' },
    { name: 'Jacob Miles', position: '', instrument: 'Clarinet' },
    { name: 'Joshua Miles', position: '', instrument: 'Trumpet' }
  ]

  let songs = [
    { song: 'The Nutcracker', composer: 'Pyotr Ilyich Tchaikovsky' },
    { song: 'Troika', composer: 'Sergei Prokofiev' },
    { song: 'Carol Symphony', composer: 'Victor Hely' },
    { song: 'Christmas Greeting', composer: 'Edward Elgar' },
    { song: 'Christmas Overture', composer: 'Samuel Coleridge' },
    { song: 'Sleigh Ride', composer: 'Leopold Mozart' }
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
      <span class="text-3xl italic bold">~~~~~ Songs ~~~~~</span>
      {#each songs as song}
        <Song bind:data={song} />
      {/each}
    </div>

    <div class="flex flex-col min-h-[100vh]">
      <div class="flex flex-col items-center">
        <span class="text-3xl italic bold">~~~~~ Performers ~~~~~</span>
      </div>
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
    </div>

    <div class="flex flex-col items-center min-h-[100vh] space-y-2">
      <span class="text-3xl italic bold">~~~ Advertisments ~~~</span>
      <img src="{base}/advertising1.png" alt="advertising1" />
      <img src="{base}/Advertising-3.jpg" alt="advertising1" />
      <img src="{base}/ads-2.jpg" alt="advertising1" />
    </div>
  </MediaQuery>
</section>
