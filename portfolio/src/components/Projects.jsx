import React, { useState } from 'react';
import Works from "../components/Works";
import { HiArrowNarrowRight } from 'react-icons/hi';
export const Projects = () => {
  const [items, setItems] = useState(Works);
  
  const filterItem = (categoryItem) => {
    const updateItems = Works.filter((curElem) => {
      // Check if the project has the selected category
      return curElem.category.includes(categoryItem);
    });
    setItems(updateItems);
  }

  return (
        <div className='dark:bg-slate-900 scroll-mt-24 py-10'id='projects'>
      
      <div className="container mx-auto px-4 sm:px-8 py-16 min-h-screen pt-20" >
        <h2 className="mb-8">My Projects</h2>
       {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-4">
          <span 
            className="px-4 py-2 rounded-full border border-teal-700 text-teal-800 font-medium hover:bg-teal-700 hover:text-white transition cursor-pointer"
            onClick={() => setItems(Works)}
          >
            All
          </span>
          <span 
            className="px-4 py-2 rounded-full border border-teal-700 text-teal-800 font-medium hover:bg-teal-700 hover:text-white transition cursor-pointer"
            onClick={() => filterItem('ui/ux')}
          >
            UI/UX Design
          </span>
          <span 
            className="px-4 py-2 rounded-full border border-teal-700 text-teal-800 font-medium hover:bg-teal-700 hover:text-white transition cursor-pointer"
            onClick={() => filterItem('branding')}
          >
            Branding
          </span>
          <span 
            className="px-4 py-2 rounded-full border border-teal-700 text-teal-800 font-medium hover:bg-teal-700 hover:text-white transition cursor-pointer"
            onClick={() => filterItem('dev')}
          >
            Development
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map(({ id, image, title, category, links }) => (
            <div
              key={id}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300" >
              <img src={image} alt={title} className="w-full h-64 object-cover" />
              
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {category.map((cat, index) => (
                    <span 
                      key={index}
                      className="text-xs text-teal-300 uppercase bg-teal-900 bg-opacity-50 px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
    
                <h3 className="text-xl text-white font-semibold mb-3">{title}</h3>

                <div className="flex flex-wrap gap-2">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center text-teal-400 space-x-2 hover:text-white hover:underline bg-teal-800 bg-opacity-70 px-3 py-1 rounded transition"
                    >
                      {link.label} <HiArrowNarrowRight/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};