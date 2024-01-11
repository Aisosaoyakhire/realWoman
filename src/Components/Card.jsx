import React from 'react';
import MotherchildTwo from "../Components/MotherchildTwo.jpg";
import Baby from "../Components/baby.jpg";
import Motherchild from "../Components/motherchild.webp";
import Woman from "../Components/woman.jpg";

export default function Card() {
  return (
    <div>
   <div className="bg-pink-200 overflow-hidden container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
  <div className="flex flex-col items-center w-full md:flex-row gap-6 md:w-1/2">
    
    <div className>
      <div className=" md:mx-12 md:order-2">
        <h1 className="text-6xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">"Empowering
          Motherhood: Your All-in-One Companion for Every Step of Parenthood"
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">A supportive, comprehensive, and empowering
          resource
          specifically tailored for mothers, for self-care and child care, offering guidance and
          assistance
          throughout their parenting
          journey.</p>
      </div>
    </div>
    <div className="flex items-center justify-center h-[250px] md:w-1/2 ">
      <img className="object-cover w-full h-[300px] absolute right-0 max-w-2xl object-fit: cover rounded-full" src={MotherchildTwo} alt="mother and child" />
    
    </div>
  </div>
</div>

  {/* ====== Blog Section Start */}
  <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-primary">
              Our Blogs
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
              Our Recent News
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 p-6">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="w-full ">
            <div className="mb-6 pb-8 overflow-hidden rounded-full">
              <img src={Baby} alt="baby" className="w-full" />
            </div>
            <div>
              <span className="inline-block px-4  mb-5 text-xs font-semibold leading-loose text-center rounded bg-primary">
                Feb 22, 2024
              </span>
              <h3>
                <a href="https://kidshealth.org/en/parents/guide-parents.html#:~:text=Newborns%20don't%20have%20a,head%20when%20carrying%20your%20baby." className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                A Guide for First-Time Parents
                </a>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
              Life has changed now that your baby is here, and you might have lots of questions about what to do. These tips can help first-time parents feel confident about caring for a newborn in no time.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
          <div className="w-full">
           <div className="mb-6 pb-8 overflow-hidden rounded-full">
              <img src={Woman} alt="image" className="w-full" />
            </div>
            <div>
             <span className="inline-block px-4  mb-5 text-xs font-semibold leading-loose text-center rounded bg-primary">
                Feb 22, 2024
              </span>
              <h3>
                <a href="https://www.americanadoptions.com/pregnant/1-month-pregnant#:~:text=If%20you%20are%20one%2C%20two,including%20adoption%2C%20abortion%20and%20parenting." className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                Unplanned Pregnancy in the First Month (What are My Options?)
                </a>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
              Whether you are two weeks pregnant and don’t want a baby or four weeks pregnant and don’t want it, this guide to your options in the first month of an unplanned pregnancy will give you the guidance you need to get started.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="w-full mb-10">
            <div className="mb-6 pb-8 overflow-hidden rounded-full">
              <img src={Motherchild} alt="image" className="w-full" />
            </div>
            <div>
              <span className="inline-block px-4  mb-5 text-xs font-semibold leading-loose text-center rounded bg-primary">
                Feb 22, 2024
              </span>
              <h3>
                <a href="https://kidshealth.org/en/parents/guide-parents.html" className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                A Guide for First-Time Parents
                </a>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
              Life has changed now that your baby is here, and you might have lots of questions about what to do. These tips can help first-time parents feel confident about caring for a newborn in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}

