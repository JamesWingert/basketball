import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import bball from '/public/rawImage.jpg';
import logo1 from '/public/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className='relative bg-gray-50'>
      <Popover className='relative bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <span className='sr-only'>Your Company</span>
                <img className='h-8 w-auto sm:h-10' src={logo1.src} alt='' />
              </a>
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
                href='/players'
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
                    href='/players'
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

      <main className='lg:relative'>
        <div className='mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl justify-center items-center text-center'>
              <img
                className='h-20 w-auto sm:h-60 mx-auto'
                src={logo1.src}
                alt='Your Company'
              />
            </h1>
            <p className='mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
              Official site for the Dad Bod Association. Your home for stats and
              DBA player bios.
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'></div>
          </div>
        </div>
        <div className='relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src={bball.src}
            alt=''
          />
        </div>
      </main>
    </div>
  );
}
