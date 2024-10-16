<script>
  import Song from '$lib/components/Song.svelte'
  import { assets, base, resolveRoute } from '$app/paths'
  import Performers from '$lib/components/Performers.svelte'

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
  <div class="flex flex-col pt-8 justify-start items-center min-h-[100vh]">
    <img src="{base}/MPCO-Christmas-2024.png" alt="MPCO" />
  </div>
  <br />
  <div class="flex flex-col items-center min-h-[100vh]">
    <div class="flex flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
        <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
        <path fill-rule="evenodd" d="M9 3v10H8V3z" />
        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
      </svg>
      <span class="text-3xl italic bold ml-8 mr-8"> Songs </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
        <path fill-rule="evenodd" d="M9 3v10H8V3z" />
        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
        <path fill-rule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z" />
        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
      </svg>
    </div>
    {#each songs as song}
      <Song bind:data={song} />
    {/each}
  </div>

  <div class="flex flex-col min-h-[100vh]">
    <div class="flex flex-col items-center">
      <div class="flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path
            d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path
            d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"
          />
        </svg>
        <span class="text-3xl italic bold ml-8 mr-8 mb-4">Performers</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path
            d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-arms-up" viewBox="0 0 16 16">
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path
            d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"
          />
        </svg>
      </div>
    </div>
    <Performers bind:performers />
  </div>

  <div class="flex flex-col items-center min-h-[100vh] space-y-2">
    <div class="flex flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-badge-ad-fill" viewBox="0 0 16 16">
        <path
          d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z"
        />
        <path
          d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z"
        />
      </svg>
      <span class="text-3xl italic bold ml-8 mr-8">Advertisments</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-badge-ad-fill" viewBox="0 0 16 16">
        <path
          d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z"
        />
        <path
          d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z"
        />
      </svg>
    </div>
    <img src="{base}/advertising1.png" alt="advertising1" />
    <img src="{base}/Advertising-3.jpg" alt="advertising1" />
    <img src="{base}/ads-2.jpg" alt="advertising1" />
  </div>
</section>
