import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageHotel from '@/images/hotel.jpg'
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
    githubUrlUrl: 'https://github.com/Bami85',
    linkedinUrl: 'https://www.linkedin.com/in/ali-b-374813135/',
  },
  // More people...
]

function Avatar() {
  return (
    <div className="bg-white py-24 md:py-32">
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
                      <span className="sr-only">github</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
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
      <div className="space-y-6 text-base text-neutral-600">
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
      <footer className="bg-neutral-950 text-white py-6 text-center">
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