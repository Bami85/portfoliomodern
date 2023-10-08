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
import myPhoto from '@/images/myPhoto.jpg'
import Image from 'next/image'
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
  title: 'Our Process',
  description: 'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
};

export default function Process() {
  return (
    <>
    
      {/* <PageIntro eyebrow="Ali Bami" title="">
        <div className="flex justify-center items-center flex-col mb-6">
          <p className="text-center text-neutral-700">
          Team Manager Backup with approximately 5 year of practical experience. I'm seeking to obtain a creative and challenging position that utilizes my current knowledge of web development and design. I have a positive attitude and I am always eager to learn new skills. I am comfortable working both independently and as part of a team.
          </p>
        </div>
      </PageIntro> */}
       <span className="relative inline-block">
        <img
          className="h-16 w-16"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
      </span>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
        <HotelToni />
      </div>

      <ContactSection />

      {/* Footer Section */}
      <footer className="bg-neutral-950 text-white py-6 text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </footer>
    </>
  );
}