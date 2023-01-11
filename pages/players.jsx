import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import logo1 from '/public/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import james from '../public/james.jpg';
import tk from '../public/tk.png';
import yahrus from '../public/yahrus.png';
import jimmy from '../public/jimmy.jpg';
import ryan from '../public/rr.jpg';
import zack from '../public/zack.png';
import Link from 'next/link';
const people = [
  {
    name: 'Ryan',
    role: 'The Founder',
    imageUrl: ryan,
    bio: "The original founder of the DBA. When he's not cookin' for his kid, he's cookin' kids on the court.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'TK',
    role: 'The Assassin',
    imageUrl: tk,
    bio: "Notoriously known for killin' the opposition before they even see what's coming. Also known for killin' his team in the locker room after they dropped that pass in the 3rd quarter.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Yahrus',
    role: 'The Enforcer',
    imageUrl: yahrus,
    bio: "He'll throw a bow whether you are 10 years old or 80. The paint is his. Great player to put in when your strategy is to injure the other teams lead scorer.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jimmy',
    role: 'Inspector Gadget',
    imageUrl: jimmy,
    bio: 'With a retractable 9 foot wingspan, he has the meanest and best mid-range layup in the league.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'James',
    role: 'McMagic',
    imageUrl: james,
    bio: `Guarding him is similar to watching a magician. You are often trying to figure out his next move. Even when you do guess it, you're often left saying, "There's no way that'll work, it just doesn't make sense" but somehow, it always does.`,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Zack',
    role: 'Aquaman',
    imageUrl: zack,
    bio: "Aquaman may start out slow, but once he gets persperating, he gets slippery and can't be stopped driving to the rim.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Example() {
  return (
    <div className='relative bg-gray-50'>
      <Popover className='relative bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <img className='h-8 w-auto sm:h-10' src={logo1.src} alt='' />
              </Link>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group
              as='nav'
              className='hidden space-x-10 md:flex md:space-x-8'
            >
              <a
                href='#'
                className='text-2xl font-medium text-gray-500 hover:text-gray-900'
              >
                Players{' '}
              </a>
              <a
                href='/statistics'
                className='text-2xl font-medium text-gray-500 hover:text-gray-900'
              >
                Statistics
              </a>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
          >
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src={logo1.src}
                      alt='Your Company'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='space-y-6 py-6 px-5'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Players
                  </a>

                  <a
                    href='/statistics'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Statistics
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <div className='bg-white'>
        <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24 text-black'>
          <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
            <div className='space-y-5 sm:space-y-4'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                Players
              </h2>
              <p className='text-xl text-gray-500'>
                Talent from all over the world comes to play in the DBA. That,
                combined with the wide range of abilities and skills leads to a
                league like no other. Here are our top performing players.
              </p>
            </div>
            <div className='lg:col-span-2'>
              <ul
                role='list'
                className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8'
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className='space-y-4'>
                      <div className='aspect-w-3 aspect-h-2'>
                        <img
                          className='rounded-lg object-fit shadow-lg'
                          src={person.imageUrl.src}
                          alt=''
                        />
                      </div>
                      <div className='space-y-1 text-lg font-medium leading-6'>
                        <h3>{person.name}</h3>
                        <p className='text-indigo-600'>{person.role}</p>
                      </div>
                      <div className='text-lg'>
                        <p className='text-gray-500'>{person.bio}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
