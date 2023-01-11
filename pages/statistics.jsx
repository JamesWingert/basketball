import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import logo1 from '/public/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

export default function statistics() {
  return (
    <div className='relative bg-gray-50 text-center text-xl text-blue-600 h-screen'>
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
      Work in progress. Coming soon..
    </div>
  );
}
