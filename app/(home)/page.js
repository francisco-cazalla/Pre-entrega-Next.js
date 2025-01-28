"use client";
import { useState } from 'react';
import Image from 'next/image';


import { migrate } from '@/actions/migrate';

export default function Home() {
	
	

	



  return(
	
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://www.redeweb.com/wp-content/uploads/2023/10/aparatos-electronicos.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs dark:text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>Insert the actual text content here...</p>
			</div>
		</div>
	</div>
	<section className="py-6 dark:bg-red-600 dark:text-gray-50">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center">Encuentra el producto que necesitas Ya!</h1>
		<p className="pt-2 pb-8 text-xl font-medium text-center">Eum omnis itaque harum at quae sequi unde similique alias asperiores totam. Ex cumque maxime harum doloremque, tempore nam fugiat aspernatur rerum ipsa unde est modi commodi molestias maiores eveniet eius esse asperiores neque dicta ea quisquam? Excepturi sapiente officiis explicabo ab?</p>
		<a href='/products'>
		<button className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">PRODUCTOS</button>
        </a>	
	</div>

</section>
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
		</div>
	</div>
</section>
</div>
)


}