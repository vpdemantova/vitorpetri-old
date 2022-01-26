import{c as s,a as n,b as o,r as y}from"./vendor.8892c7f5.js";var i=Object.freeze,u=Object.defineProperty,d=(e,t)=>i(u(e,"raw",{value:i(t||e.slice())})),r;s(import.meta.url,{modules:[],hydratedComponents:[],hoisted:[]});const m=n(import.meta.url,"https://astro.build","file:///C:/Users/laabe/Desktop/Code/www/vitorpetri.com/");o(async(e,t,l)=>{e.createAstro(m,t,l);const c=[{props:{lang:"sass",global:!0},children:`.filter {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  position: sticky;
  top: -7rem;
}
@media (max-width: 762px) {
  .filter {
    display: block;
    margin: 8rem auto 0;
    justify-content: center;
    margin-top: 5.6rem;
  }
}

.filter__circle {
  position: relative;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border: 1px solid var(--white);
  transition: background 200ms;
  z-index: 1;
}
@media (max-width: 762px) {
  .filter__circle {
    width: 6rem;
    height: 6rem;
  }
}

.filter__inner__circle {
  position: absolute;
  top: 50%;
  left: 0.1rem;
  transform: translateY(-50%) scale(0);
  width: 3.4rem;
  height: 100%;
  border-radius: 50%;
  background: var(--white);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (max-width: 762px) {
  .filter__inner__circle {
    width: 6rem;
  }
}

@media (min-width: 762px) {
  .filter__circle:hover ~ .filter__inner__circle {
    transform: translateY(-50%) scale(1);
  }
}
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: 2.4rem;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  position: relative;
}`}];for(const a of c)e.styles.add(a);return y(r||(r=d([`<div class="filter animate__animated animate__fadeInUp animate__delay-1s">
  <ul>
    <li onclick="toggleWebsites()">
      <div class="filter__circle webCircle"></div>
      <div class="filter__inner__circle"></div>
      Websites
    </li>
    <li onclick="toggleDigitalArt()">
      <div class="filter__circle artCircle"></div>
      <div class="filter__inner__circle"></div>
      Digital Art
    </li>
    <li onclick="toggleExperiments()">
      <div class="filter__circle expCircle"></div>
      <div class="filter__inner__circle"></div>
      Experiments
    </li>
  </ul>
</div>

<script global>
function show(gallery, button) {
  gallery.style.display = 'flex'

  setTimeout(() => {
    gallery.style.opacity = '1'
    gallery.style.transform = 'translate(0, 0) scale(1)'
    button.style.backgroundColor = '#fff'
  })
}

function hide(gallery, button, y) {
  var actualy = '0%'

  if (document.body.clientWidth < 768) {
    actualy = '-53%'
  } else {
    actualy  = '-56%'
  }

  gallery.style.display = 'none'

  setTimeout(() => {
    gallery.style.opacity = '0'
    gallery.style.transform = \`translate(\${y}, \${actualy}) scale(0)\`
    button.style.backgroundColor = 'transparent'
  })
}

function hideAlone(gallery, button, y) {
  var actualyy = '0%'

  if (document.body.clientWidth < 768) {
    actualyy = '-53%'
  } else {
    actualyy  = '-56%'
  }

  setTimeout(() => {
    gallery.style.opacity = '0'
    gallery.style.transform = 'translate(0, 0) scale(0)'
    button.style.backgroundColor = 'transparent'
  })

  setTimeout(() => {
    gallery.style.display = 'none'
    gallery.style.transform = \`translate(\${y}, \${actualyy}) scale(0)\`
  }, 350)
}

function toggleFunction(
  active, 
  activeCircle,
  inactiveOne,
  inactiveCircleOne,
  inactiveTwo,
  inactiveCircleTwo,
  ay,
  by
  ) {
    
  show(active, activeCircle)
  hide(inactiveOne, inactiveCircleOne, ay)
  hide(inactiveTwo, inactiveCircleTwo, by)
}

let isWebActive = false
let isArtActive = false
let isExpActive = false

function toggleWebsites() {
  const websites = document.querySelector('.websites')
  const webCircle = document.querySelector('.webCircle')
  const digitalArt = document.querySelector('.digital-art')
  const artCircle = document.querySelector('.artCircle')
  const experiments = document.querySelector('.experiments')
  const expCircle = document.querySelector('.expCircle')

  setTimeout(() => {
    isWebActive = true
    isArtActive = false
    isExpActive = false
  }, 10)

  var ay = '0%'
  var ey = '0%'

  if (document.body.clientWidth < 768) {
    ay = '-15%'
    ey = '30%'
  } else {
    ay = '-40%'
    ey = '-30%'
  }

  toggleFunction(websites, webCircle, digitalArt, artCircle, experiments, expCircle, ay, ey)

  if (isWebActive == true) {
    

    hideAlone(websites, webCircle, '-50%')

    setTimeout(() => {
      isWebActive = false
    }, 10)
  }  
}

function toggleDigitalArt() {
  const websites = document.querySelector('.websites')
  const webCircle = document.querySelector('.webCircle')
  const digitalArt = document.querySelector('.digital-art')
  const artCircle = document.querySelector('.artCircle')
  const experiments = document.querySelector('.experiments')
  const expCircle = document.querySelector('.expCircle')

  setTimeout(() => {
    isWebActive = false
    isArtActive = true
    isExpActive = false
  })

  var ay = '0%'
  var ey = '0%'

  if (document.body.clientWidth < 768) {
    ay = '-15%'
    ey = '30%'
  } else {
    ay = '-40%'
    ey = '-30%'
  }

  toggleFunction(digitalArt, artCircle, websites, webCircle, experiments, expCircle, '-50%', ey)

  if (isArtActive == true) {
    hideAlone(digitalArt, artCircle, ay)

    setTimeout(() => {
      isArtActive = false
    })
  }  
}

function toggleExperiments() {
  const websites = document.querySelector('.websites')
  const webCircle = document.querySelector('.webCircle')
  const digitalArt = document.querySelector('.digital-art')
  const artCircle = document.querySelector('.artCircle')
  const experiments = document.querySelector('.experiments')
  const expCircle = document.querySelector('.expCircle')

  setTimeout(() => {
    isWebActive = false
    isArtActive = false
    isExpActive = true
  })

  var ay = '0%'
  var ey = '0%'

  if (document.body.clientWidth < 768) {
    ay = '-15%'
    ey = '30%'
  } else {
    ay = '-40%'
    ey = '-30%'
  }

  toggleFunction(experiments, expCircle, digitalArt, artCircle, websites, webCircle, ay, '-50%')

  if (isExpActive == true) {
    hideAlone(experiments, expCircle, ey)

    setTimeout(() => {
      isExpActive = false
    })
  }  
}

<\/script>

`],[`<div class="filter animate__animated animate__fadeInUp animate__delay-1s">
  <ul>
    <li onclick="toggleWebsites()">
      <div class="filter__circle webCircle"></div>
      <div class="filter__inner__circle"></div>
      Websites
    </li>
    <li onclick="toggleDigitalArt()">
      <div class="filter__circle artCircle"></div>
      <div class="filter__inner__circle"></div>
      Digital Art
    </li>
    <li onclick="toggleExperiments()">
      <div class="filter__circle expCircle"></div>
      <div class="filter__inner__circle"></div>
      Experiments
    </li>
  </ul>
</div>

<script global>
function show(gallery, button) {
  gallery.style.display = 'flex'

  setTimeout(() => {
    gallery.style.opacity = '1'
    gallery.style.transform = 'translate(0, 0) scale(1)'
    button.style.backgroundColor = '#fff'
  })
}

function hide(gallery, button, y) {
  var actualy = '0%'

  if (document.body.clientWidth < 768) {
    actualy = '-53%'
  } else {
    actualy  = '-56%'
  }

  gallery.style.display = 'none'

  setTimeout(() => {
    gallery.style.opacity = '0'
    gallery.style.transform = \\\`translate(\\\${y}, \\\${actualy}) scale(0)\\\`
    button.style.backgroundColor = 'transparent'
  })
}

function hideAlone(gallery, button, y) {
  var actualyy = '0%'

  if (document.body.clientWidth < 768) {
    actualyy = '-53%'
  } else {
    actualyy  = '-56%'
  }

  setTimeout(() => {
    gallery.style.opacity = '0'
    gallery.style.transform = 'translate(0, 0) scale(0)'
    button.style.backgroundColor = 'transparent'
  })

  setTimeout(() => {
    gallery.style.display = 'none'
    gallery.style.transform = \\\`translate(\\\${y}, \\\${actualyy}) scale(0)\\\`
  }, 350)
}

function toggleFunction(
  active, 
  activeCircle,
  inactiveOne,
  inactiveCircleOne,
  inactiveTwo,
  inactiveCircleTwo,
  ay,
  by
  ) {
    
  show(active, activeCircle)
  hide(inactiveOne, inactiveCircleOne, ay)
  hide(inactiveTwo, inactiveCircleTwo, by)
}

let isWebActive = false
let isArtActive = false
let isExpActive = false

function toggleWebsites() {
  const websites = document.querySelector('.websites')
  const webCircle = document.querySelector('.webCircle')
  const digitalArt = document.querySelector('.digital-art')
  const artCircle = document.querySelector('.artCircle')
  const experiments = document.querySelector('.experiments')
  const expCircle = document.querySelector('.expCircle')

  setTimeout(() => {
    isWebActive = true
    isArtActive = false
    isExpActive = false
  }, 10)

  var ay = '0%'
  var ey = '0%'

  if (document.body.clientWidth < 768) {
    ay = '-15%'
    ey = '30%'
  } else {
    ay = '-40%'
    ey = '-30%'
  }

  toggleFunction(websites, webCircle, digitalArt, artCircle, experiments, expCircle, ay, ey)

  if (isWebActive == true) {
    

    hideAlone(websites, webCircle, '-50%')

    setTimeout(() => {
      isWebActive = false
    }, 10)
  }  
}

function toggleDigitalArt() {
  const websites = document.querySelector('.websites')
  const webCircle = document.querySelector('.webCircle')
  const digitalArt = document.querySelector('.digital-art')
  const artCircle = document.querySelector('.artCircle')
  const experiments = document.querySelector('.experiments')
  const expCircle = document.querySelector('.expCircle')

  setTimeout(() => {
    isWebActive = false
    isArtActive = true
    isExpActive = false
  })

  var ay = '0%'
  var ey = '0%'

  if (document.body.clientWidth < 768) {
    ay = '-15%'
    ey = '30%'
  } else {
    ay = '-40%'
    ey = '-30%'
  }

  toggleFunction(digitalArt, artCircle, websites, webCircle, experiments, expCircle, '-50%', ey)

  if (isArtActive == true) {
    hideAlone(digitalArt, artCircle, ay)

    setTimeout(() => {
      isArtActive = false
    })
  }  
}

function toggleExperiments() {
  const websites = document.querySelector('.websites')
  const webCircle = document.querySelector('.webCircle')
  const digitalArt = document.querySelector('.digital-art')
  const artCircle = document.querySelector('.artCircle')
  const experiments = document.querySelector('.experiments')
  const expCircle = document.querySelector('.expCircle')

  setTimeout(() => {
    isWebActive = false
    isArtActive = false
    isExpActive = true
  })

  var ay = '0%'
  var ey = '0%'

  if (document.body.clientWidth < 768) {
    ay = '-15%'
    ey = '30%'
  } else {
    ay = '-40%'
    ey = '-30%'
  }

  toggleFunction(experiments, expCircle, digitalArt, artCircle, websites, webCircle, ay, '-50%')

  if (isExpActive == true) {
    hideAlone(experiments, expCircle, ey)

    setTimeout(() => {
      isExpActive = false
    })
  }  
}

<\/script>

`])))});
