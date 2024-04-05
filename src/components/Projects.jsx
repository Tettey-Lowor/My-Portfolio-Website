import React from 'react'
import image2 from '../Assets/Screenshot 2024-04-05 120245.png';
import image3 from '../Assets/WhatsApp Image 2024-04-05 at 10.35.44 AM.jpeg';
import image4 from '../Assets/movies app.png';
import { Link } from 'react-router-dom';



export default function Projects() {
  return (
    <section class="bg-gray-900 mt-20 py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-8">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={image2} alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Leaf&Petals</h3>
                    <p class="text-gray-700 text-base">A flower Landing Page of theme"flowershop" using HTML and CSS.</p>
                    <div class="mt-4 flex items-center justify-between">
                        
                        
                        <a href='https://green-growth-landing.vercel.app/'><button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 trans<ition duration-200">See more</button></a>
                       
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src=
                {image3} alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Sustainable Futures Projet</h3>
                    <p class="text-gray-700 text-base">A community Service innitiative by the Environmental Leadership Forum, ELF, aimed at imparting environmental management principles to primary school pupils.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <a href='https://www.linkedin.com/posts/fredericka-tettey-lowor-49392821a_sustainability-environmentaleducation-activity-6954026082341658624-DFbO?utm_source=share&utm_medium=member_desktop'>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">See more</button>
                            </a>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Ruby Agro-marketPlace</h3>
                    <p class="text-gray-700 text-base">Woked with a team of three on an ecommerce agromarket webiste using react, where users can create account, order products, sellers can add, remove and edit products and caretae account as well.</p>
                    <div class="mt-4 flex items-center justify-between">
                        
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">See more</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={image4} alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Ruby Movies</h3>
                    <p class="text-gray-700 text-base">A fun website where users can create account, watch and stream all kinds of movies.</p>
                    <div class="mt-4 flex items-center justify-between">
                        
                         
                        < a href="https://movie-app-blue-alpha.vercel.app/">
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 +transition duration-200">See more</button>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
