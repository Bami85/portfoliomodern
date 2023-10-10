import { Blockquote } from '../components/Blockquote'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import PageIntro from './pageIntro'
import { StylizedImage } from '../components/StylizedImage'
import imageLaptop from '../images/laptop.jpg'
import imageMeeting from '../images/meeting.jpg'
import imageWhiteboard from '../images/whiteboard.jpg'
import imageHotel from '../images/hotel.jpg'
import React from 'react';
import Link from 'next/link'



function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]mt-16">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}


const people = [
  {
    name: 'Ali Bami',
    role: 'Web Developer / CEO',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E03AQEt8tW-sxhoFw/profile-displayphoto-shrink_400_400/0/1696878699766?e=1702512000&v=beta&t=bicOKT4E2ze5MyapKZqo0EFIuW_NzRt_1rX3ofz-wwE',
    bio: 'Team Manager Backup with approximately 5 year of practical experience. I m seeking to obtain a creative and challenging position that utilizes my current knowledge of web development and design. I have a positive attitude and I am always eager to learn new skills. I am comfortable working both independently and as part of a team',
    githubUrl: 'https://github.com/Bami85', 
    linkedinUrl: 'https://www.linkedin.com/in/ali-b-374813135/',
    email: ''
  },
  // More people...
]

function Avatar() {
  return (
    <div className="py-24 md:py-25 bg-cyan-100 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.githubUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Github</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                         <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path></svg>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.email} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Email</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email"><g fill="#134563"><path d="m55.5 18.8-1.9-1.9L36 34.5c-2.2 2.2-5.9 2.2-8.1 0L10.3 17l-1.9 1.9L21.5 32 8.4 45.1l1.9 1.9 13.1-13.1 2.6 2.6c1.6 1.6 3.7 2.5 5.9 2.5s4.3-.9 5.9-2.5l2.6-2.6L53.5 47l1.9-1.9L42.3 32l13.2-13.2"></path><path d="M51.8 50.4H12.3c-2.3 0-4.2-1.9-4.2-4.2V18c0-2.3 1.9-4.2 4.2-4.2h39.5c2.3 0 4.2 1.9 4.2 4.2v28.2c0 2.3-1.9 4.2-4.2 4.2zM12.2 16.5c-.8 0-1.4.6-1.4 1.4v28.2c0 .8.6 1.4 1.4 1.4h39.5c.8 0 1.4-.6 1.4-1.4V17.9c0-.8-.6-1.4-1.4-1.4H12.2z"></path></g></svg>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


function Discover() {
  return (
    <Section title="Project 1" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600 ">
        <p>
          My degree project in{' '}
          <strong className="font-semibold text-neutral-950">React</strong> and
          Strapi, is a Volvo webshop butik to rent out Volvo Cars.
        </p>
      </div>
      <Link href="https://online-volvocars-app.vercel.app/">
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Visit <strong className="font-semibold text-neutral-950"> https://online-volvocars-app.vercel.app/</strong>
      </h3>
      </Link>
    </Section>
  );
}

function Build() {
  return (
    <Section title="Project 2" image={{ src: imageLaptop }}>
    <div className="space-y-6 text-base text-neutral-600">
      <p>
        Website where you can find your flight in real time made in{' '}
        <strong className="font-semibold text-neutral-950">Next.js</strong> and
        MongoDb
      </p>
    </div>
    <Link href="https://flyg-com.vercel.app/">
    <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Visit <strong className="font-semibold text-neutral-950"> https://flyg-com.vercel.app</strong>
    </h3>
    </Link>
  </Section>
  );
}

function HotelToni() {
  return (
    <Section title="Project 4" image={{ src: imageHotel, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Website build in Next.js,Tailwindu, MongoDb{' '}
          <strong className="font-semibold text-neutral-950">Next.js,Tailwind, MongoDb</strong>
        </p>
      </div>
      <Link href="https://hoteltoni.vercel.app/">
    <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      Visit <strong className="font-semibold text-neutral-950"> https://hoteltoni.vercel.app/</strong>
    </h3>
    </Link>
    </Section>
  );
}

export const HotelData = {
  title: 'Our website hotel',
  description: 'Up above the sea... Below the sky.',
};

function Deliver() {
  return (
    <Section title="Project 3" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
         Project done with others collegs {' '}
          <strong className="font-semibold text-neutral-950">React,Node.js, MaterialUi, </strong>
        </p>
      </div>
    </Section>
  );
}



export const metadata = {
  title: 'ali.bami',
  description: '',
};









export default function Process() {
  return (
    <>
    
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Avatar/>
        <Discover />
        <Build />
        <Deliver />
        <HotelToni />
  

      </div>

      <ContactSection />

      {/* Footer Section */}
      <footer className="py-12 md:py-16 bg-sky-300 text-white">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Bami85" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ali-b-374813135/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="ali.bami@studio.unibo.it">Email</a>
        </div>
      </footer>
    </>
  );
}