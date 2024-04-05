import React from 'react'

export default function Navbar() {
  return (
    <>
   
    <nav class="flex flex-wrap items-center justify-between p-3 bg-indigo-300 ">
    
    <div class="flex md:hidden">
        <button id="hamburger">
          <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
    </div>
    <div
        class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <a href="#"
            class="block md:inline-block text-black-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home
        </a>
        <a href="#"
            class="block md:inline-block text-white-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Projects
        </a>
        <a href="#"
            class="block md:inline-block text-black-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Skills
        </a>
        <a href="#"
            class="block md:inline-block text-black-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact
        </a>
    </div>
    <a href="#"
        class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Sign in

    </a>
</nav>
</>
  )
}
