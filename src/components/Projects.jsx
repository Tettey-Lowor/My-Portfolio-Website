import React from 'react'

export default function Projects() {
  return (
    <section class="bg-gray-900 mt-20 py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-8">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Leaf&Petals</h3>
                    <p class="text-gray-700 text-base">Created a Landing Page of theme"flowershop" using HTML and CSS.</p>
                    <div class="mt-4 flex items-center justify-between">
                        
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">See more</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Sustainable Futures Project</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">See more</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Ruby Agro-marketPlace</h3>
                    <p class="text-gray-700 text-base">Woked with a team of three on an ecommerce agromarket webiste using react.</p>
                    <div class="mt-4 flex items-center justify-between">
                        
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">See more</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Ruby Movies</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">See more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
