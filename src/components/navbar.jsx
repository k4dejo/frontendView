// import { Link } from "react-router-dom";
// import { Flex, Avatar, TextField, IconButton, DropdownMenu } from '@radix-ui/themes';
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import navigation from "../data/navigation";
import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

const Navbar = () => {
  // const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-gray-200">
          <div className="flex h-16 items-center">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-gray-500 opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="bg-white data-[state=open]:animate-contentShow fixed top-0  w-full h-[100vh] max-w-xs rounded-[6px]  p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-auto">
                  <div className="flex px-4 pb-2 pt-5">
                    <Tabs.Root className="mt-2 flex" defaultValue="default1">
                      {navigation.categories.map((category) => (
                        <React.Fragment key={category.name}>
                          <Tabs.List
                            className="shrink-0 flex border-b border-gray-400"
                            aria-label="Menu mobile"
                          >
                            <Tabs.Trigger
                              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-500 select-none  last:rounded-tr-md hover:text-blue-500 data-[state=active]:text-blue-800
                              data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active] outline-none cursor-pointer whitespace-nowrap py-4 text-base font-medium"
                              value={category.name}
                            >
                              {category.name}
                            </Tabs.Trigger>
                          </Tabs.List>
                          <Tabs.Content
                            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                            value={category.name}
                          >
                            {navigation.categories.map((category) => (
                              <Tabs.Content
                                key={category.name}
                                className="space-y-10 px-4 pb-8 pt-10"
                              >
                                <div className="grid grid-cols-2 gap-x-4">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-sm"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-6 block font-medium text-gray-900"
                                      >
                                        <span
                                          className="absolute inset-0 z-10"
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </Tabs.Content>
                            ))}
                          </Tabs.Content>
                        </React.Fragment>
                      ))}
                    </Tabs.Root>
                    {/* <Tabs.Root className="mt-2" defaultValue="default1" asChild>
                      <div className="shrink-0 flex  border-b border-gray-400">
                        {navigation.categories.map((category) => (
                          <React.Fragment key={category.name}>
                            <Tabs.List aria-label="Menu mobile">
                              <Tabs.Trigger
                                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-500 select-none  last:rounded-tr-md hover:text-blue-500 data-[state=active]:text-blue-800
                              data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active] outline-none cursor-pointer whitespace-nowrap py-4 text-base font-medium"
                                value={category.name}
                              >
                                {category.name}
                              </Tabs.Trigger>
                            </Tabs.List>

                            <Tabs.Content
                              value={category.name}
                              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                            >
                            </Tabs.Content>
                          </React.Fragment>
                        ))}
                      </div>
                    </Tabs.Root> */}

                    <Dialog.Close asChild>
                      <button
                        className="text-blue-500 hover:text-white hover:bg-blue-300 focus:shadow-gray-500 absolute
                          top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                      >
                        <Cross2Icon />
                      </button>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-[100px] w-[100px]"
                  src="src/assets/STA-02.png"
                  alt=""
                />
              </a>
            </div>

            {/* Flyout menus */}

            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8 px-10">
                {navigation.categories.map((category) => (
                  <Popover.Root key={category.name} className="flex">
                    <Popover.Trigger asChild className="flex">
                      <span>
                        <a className="focus:text-blue-600 focus:border-blue-600 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out cursor-pointer">
                          {category.name}
                        </a>
                      </span>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        className="relative top-[-3px] ml-4 p-3 w-[80rem] max-w-7xl bg-white shadow-[0_10px_38px_-10px_rgba(0,0,0,0.35)]"
                        sideOffset={5}
                      >
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign in
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create account
                </a>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
