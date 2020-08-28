<template>
<header class="flex wrapper header" data-constrain="more">
  <div class="grow">
    <img style="margin: 0;" src="~/assets/img/pang_57x57.png" width="42" height="42">
  </div>
  <nav class="grow">
    <ul class="flex full">
      <li>
        <NuxtLink to="/" aria-label="Your Feed"><svg height="42" viewBox="0 0 21 21" width="42" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 4)">
              <path d="m3.5 3.165h9" />
              <path
                d="m4.48122025 6.20339509 1-.01878307c.55218735-.01037177 1.00823163.42885655 1.01860339.9810439.00011757.00625923.00017636.01251942.00017636.01877975v.98327989c0 .54496455-.4363518.98958934-.98122025.99982364l-1 .01878306c-.55218735.01037177-1.00823163-.42885654-1.01860339-.98104389-.00011757-.00625923-.00017636-.01251942-.00017636-.01877975v-.98327989c0-.54496455.4363518-.98958935.98122025-.99982364z" />
              <path d="m2.5.1507576h11c1.1045695 0 2 .8954305 2 2v10.0147186h-13c-1.1045695 0-2-.8954305-2-2v-8.0147186c0-1.1045695.8954305-2 2-2z" />
              <path d="m8.5 6.165h4" />
              <path d="m8.5 9.165h4" />
              <path d="m15 12.1654762c1.3807119 0 2.5-1.1192881 2.5-2.49999998v-6.5h-2" />
            </g>
          </svg></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games/" aria-label="Your Games"><svg height="42" viewBox="0 0 21 21" width="42" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.5 7.5h4l-6 9v-6.997l-4-.003 6-9z" fill="none" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(5 2)" /></svg></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/messages/" aria-label="Your Messages"><svg height="42" viewBox="0 0 21 21" width="42" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)">
              <path
                d="m15.5 4.5c1.6568542 0 3 1.34314575 3 3v5c0 1.6568542-1.3431458 3-3 3l-2.468-.001-1.7152977 2.4298518c-.1639804.2320786-.4176379.3818336-.6960544.4156462l-.1206479.0072945c-.55228475 0-1-.4477152-1-1l-.001-1.8527925-.999.001c-1.65685425 0-3-1.3431458-3-3v-5c0-1.65685425 1.34314575-3 3-3z"
                transform="matrix(-1 0 0 1 24 0)" />
              <path
                d="m5.5 12.5-2 2v-4h-.90625561c-1.09544195 0-1.98704628-.88123276-1.9998631-1.97659973l-.07020561-6c-.01292361-1.10449389.87196894-2.01033976 1.97646283-2.02326337.00779976-.00009127.01559998-.0001369.02340027-.0001369h8.97646122c1.1045695 0 2 .8954305 2 2v2" />
            </g>
          </svg></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/account/" aria-label="Your Account"><svg height="42" viewBox="0 0 21 21" width="42" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 2)">
              <path
                d="m7.5.5c1.65685425 0 3 1.34314575 3 3v1c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-1c0-1.65685425 1.34314575-3 3-3zm7 14c0-.2427251 0-.4854502 0-.7281753 0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" />
              <path
                d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8231657 2.40189702-1.9755891 2.82054652.6579909-.79913412.9865095-1.90625342.9855555-3.32135789s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z"
                fill="#2a2e3b" />
            </g>
          </svg></NuxtLink>
      </li>
    </ul>
  </nav>
</header>
</template>

<style lang="scss" scoped>
.header {
    justify-content: space-around;
    align-items: center;
    margin: {
        top: 0;
        bottom: 1rem;
    }
}

.grow {
    flex: 1;

    ul {
        justify-content: space-around;
    }
}
</style>
