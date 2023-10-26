// import React from 'react';
// import { Container } from '../../components/Container';
// import { FadeIn } from '../../components/FadeIn';
import Link from 'next/link';

// const team = [
//   {
//     title: 'Web Developer | SEO ',
//     people: [
//       {
//         name: 'Ali Bami',
//         role: 'Web Developer / JavaScript/ React/ WordPress/ Next.js/ Node.js/Tailwind/MaterialUI',
//         description: 'Hej! Jag är en entusiastisk webbutvecklare som älskar att skapa innovativa och användarvänliga webblösningar. 🚀 Kodning är min kreativa lekplats och jag är ständigt fascinerad av dess möjligheter. Fotboll har varit min passion sedan barndomen och att kombinera det med min kärlek för webbutveckling är en riktig glädje. På fritiden hittar du mig antingen på gymmet, eller simmandes i poolen, njutandes av känslan av frihet och friskhet i vattnet. Att lära mig nya färdigheter är något jag alltid är ivrig att göra, och jag trivs både med att arbeta självständigt och i team. Jag ser fram emot spännande utmaningar och möjligheter inom webbutvecklingens värld! 💻😊.',
//       },
//     ],
//   },
// ];

// export default function Page() {
//   return (
//     <Container className="mt-24 sm:mt-32 lg:mt-40">
//       <div className="space-y-24">
//         {team.map((teamItem, index) => (
//           <div key={index} className="flex flex-col lg:flex-row items-center">
//             <FadeIn>
//               <div className="lg:order-2 lg:ml-12 flex-grow">
//                 <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
//                   {teamItem.people.map((person, personIndex) => (
//                     <li key={personIndex}>
//                       <div>
//                         <p className="text-sm text-neutral-600">{person.description}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
                // <a
                //   className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400"
                //   href="/CV.pdf"
                //   download
                // >
                //   Download CV
                // </a>
               
                //  <Link href ="/CV.pdf" target ={"_blank"} className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400'>Show CV
                
                // </Link>
//                 </div>
//             </FadeIn>
         
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// }




import React from 'react';
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const activity = [

  {
    id: 4,
    type: 'comment',
    person: { name: 'Ali Bami', href: '' },
    imageUrl:
      'https://cdn.britannica.com/03/6203-050-E0C843BA/Albania-map-boundaries-cities-locator.jpg',
    comment:
      'The eagle is associated with my country. In Albanian culture, weddings are often elaborate and festive affairs that can last for an entire month 🤣. ',
    date: 'in Albania ',
  },
  {
    id: 2,
    type: 'comment',
    person: { name: 'I grew up', href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Map_of_Italy_%281494%29-en.svg/640px-Map_of_Italy_%281494%29-en.svg.png' },
    imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Map_of_Italy_%281494%29-en.svg/640px-Map_of_Italy_%281494%29-en.svg.png',
    comment:'An interesting fact about Italy is that it is the birthplace of the tricolor flag. Additionally, Italians are known for their expressive gestures and are considered one of the most gesture-prone nations in all of Europe 🤌 ',
    date: 'in Italy',
  },
  {
    id: 3,
    type: 'assignment',
    person: { name: 'I live', href: '' },
    imageUrl:
    'https://maps-sweden.com/img/1200/sweden-provinces-map.jpg',
    comment:'Known worldwide as the country of IKEA. An interesting fact about Sweden is that it was the first country in Europe to consume the most frozen foods. 🍽️',
    date: 'in Sweden',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
       <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === 'comment' ? (
                  <>
                    <div className="relative">
                      <img
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 ring-8 ring-white"
                        src={activityItem.imageUrl}
                        alt=""
                      />

                      <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                        <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500"> {activityItem.date}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.comment}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'assignment' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400 ring-8 ring-white">
                          <UserCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">{activityItem.date}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.comment}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'tags' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 ring-8 ring-white">
                          <TagIcon className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <a
        className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400"
        href="/CV.pdf"
        download
      >
        Download CV
      </a>

      <Link href="/CV.pdf" passHref>
        <div className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 text-sm font-semibold leading-6 text-indigo-400">
          Show CV
        </div>
      </Link>
   
    </>
  )
}
