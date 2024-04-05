import React from 'react'

export default function Skills() {
  return (
    <div class="bg-gray-900 p-4 min-h-screen mb-20 mt-20">
    <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 gap-10 -space-x-52 opacity-20 mb-30">
      <div class="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
      <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600 mb-20"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div class="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary">
          <path fill-rule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clip-rule="evenodd"></path>
        </svg>
        <h2 class="my-8 text-2xl font-bold text-white md:text-4xl">My Skills</h2>
        <p class="text-gray-300">I have built both Technical and Professional skills and some of them are below</p>
      </div>
      <div
        class="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
        <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8">
            {/* <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent"> */}
            <div class="space-y-2">
              <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">Design & Development</h5>
              <p class="text-gray-300">I started learning to code after my one year of serveice without having any prior knowledge but i wanted to prove a point to myself, well and I  succeeded😉. Over time, i have gained a wealth of experience designing and developing websites and webapps and I aim to do better.       </p>
            </div>
          </div>
        </div>
        <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8 mb-20">
            {/* <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent" > */}
            <div class="space-y-2">
              <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">Adaptability & Continuous Learning</h5>
              <p class="text-gray-300">By pursuing new skills in technical fields like web development, I develped my adaptability and  drive for self-improvement beyond my original scope of work.</p>
            </div>
          </div>
        </div>
        <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8">
            {/* <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent" > */}
            <div class="space-y-2">
              <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">Collaboration &Networking</h5>
              <p class="text-gray-300">  I excel at team work, as shown through collaborative projects with organizations. I also foster networking through involvement in forums and events.</p>
            </div>
          </div>
        </div>
        <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div class="relative space-y-8 py-12 p-8">
            {/* <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent"> */}
            <div class="space-y-2">
              <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">Teaching</h5>
              <p class="text-gray-300">Through mentorship and facilitating activities, i have built my skills in teaching people of young ages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
