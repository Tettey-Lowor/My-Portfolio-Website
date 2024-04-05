import React from 'react'

export default function Footer() {
  return (
    <footer class="flex flex-col space-y-10 justify-center m-10 bg-gradient-to-b from-gray-800 to-black w-full">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium mt-10">
        <a class="hover:text-gray-900" href="#">Home</a>
        <a class="hover:text-gray-900" href="#">About</a>
        <a class="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div class="flex justify-center space-x-5 ">
        <a class="" href="https://web.facebook.com/profile.php?id=61556673441303" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://www.linkedin.com/in/fredericka-tettey-lowor-49392821a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com/freda_tettey" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div >
    <p class="text-center text-gray-700 font-medium mb-10">&copy; 2024 Fredericka Tettey-Lowor. All rights reserved.</p>
</footer>
  )
}
