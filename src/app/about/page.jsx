// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'

// export default function CvPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (

//     <main className="mt-24 sm:mt-32 lg:mt-40">
//       {/* CTA section */}
//       <div className="space-y-24">
//         <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            // <img
            //   className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            //   src="https://avatars.githubusercontent.com/u/91563447?v=4"
            //   alt=""
            // />
//             <div className="w-full flex-auto">
//               <ul
//                 role="list"
//                 className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
//               ></ul>
//               <div className="mt-10 flex">
//               <a
//               className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400"
//               href="Cv.pdf"
//               download
//             >
//               Download My CV
//             </a>
//             {' '}
            
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
//           aria-hidden="true"
//         >
//           <div
//             className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
//             style={{
//               clipPath:
//                 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
//             }}
//           />
//         </div>
//       </div>
//     </main>
//   )
// }



'use client'

import React from 'react';
import { useState } from 'react';
import { Container } from '../../components/Container';
import { FadeIn } from '../../components/FadeIn';


const team = [
  {
    title: 'Web Developer | SEO ',
    people: [
      {
        name: 'Ali Bami',
        role: 'Web Developer / JavaScript/ React/ WordPress/ Next.js/ Node.js/Tailwind/MaterialUI',
        title: 'Web developer ',
        description:'Junior Web Developer with approximately 1 year of practical experience and 2 years of web development school, I`m seeking to obtain a creative and challenging position that utilizes my current knowledge of web development and design. I have a positive attitude and I am always eager to learn new skills. I am comfortable working both independently and as part of a team.'
      },
    ],
  },
];

export default function Page() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      
      <div className="space-y-24">
        {team.map((teamItem, index) => (
          <div key={index}>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                {teamItem.title}
              </h2>
            </FadeIn>
            <div className="lg:col-span-3">
              <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://avatars.githubusercontent.com/u/91563447?v=4"
              alt=""
            />
              {teamItem.people.map((person, personIndex) => (
                  <li key={personIndex}>
                    <FadeIn>
                      <div>
                        <p className="text-sm text-neutral-600">{person.description}</p>
                      </div>
                    </FadeIn>
                  </li>
                ))}
            </div>
          
            
          </div>
        ))}
          <a
              className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400"
              href="Cv.pdf"
              download
            >
              Download My CV
            </a>
            {' '}
        
      </div>
      
    </Container>
  );
}

