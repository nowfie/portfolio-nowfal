import React from 'react';
import { serviceData } from '@/utils/staticData';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';
import ClientSection from '../../(root)/section/ClientSection';
import ContactSection from '../../(root)/section/ContactSection';

const ServicePage = async ({ params }) => {
  const { name } = await params;
  const service = serviceData.find((item) => item.name === name);

  if (!service) {
    return (
      <div className="py-16 bg-black">
        <h1 className="text-8xl text-white">Service not found</h1>
      </div>
    );
  }

  const FeaturesBox = ({item})=>{
    let Icon = item.icon
    return(
        <div className="p-6 space-y-5 bg-paragraph-default/10 rounded-lg">
          <Icon className=' text-4xl text-primary-default'/>
          <h1 className=' font-heading capitalize text-xl'>{item.heading}</h1>
          <p className=' text-paragraph-default capitalize text-sm'>{item.description}</p>
        </div>
      //   <div className={`  p-8 border space-y-8`}>
      //   <h1 className=' font-heading capitalize text-3xl font-semibold'>{item.heading}</h1>
      //   <Icon className=' text-primary-default  text-5xl'/>
      //   <p className=' capitalize text-sm  font-medium text-heading-default'>{item.description}</p>
      // </div>
    )
  }
  return (
    <main className=' space-y-8'>
      <Header name={service.title} description={service.description} />
      <section>
        <div className="main space-y-14">
         <Image src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>  
          <div className="flex flex-col justify-center items-center">
            <div className="xl:w-[70%] space-y-10">
              
              <div className="description">
                <h1 className=' font-heading text-2xl uppercase mb-4'>{service.title}</h1>
                <ul className=' space-y-3'>
                  {service.details.map((item,index)=>(
                    <li key={index} className=' text-paragraph-default leading-relaxed capitalize'>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="features">
                <h1 className=' font-heading text-2xl uppercase mb-5'>What's Included</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {service.features.map((item,index)=>(
                    <FeaturesBox item={item} key={index}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientSection/>
      <div className=" !my-24"></div>
      <ContactSection/>
    </main>
  );
};

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    name: service.name,
  }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const service = serviceData.find((item) => item.name === name);

  return {
    title: service?.title || 'Service not found',
    description: service?.description || 'Service details unavailable',
  };
}

export default ServicePage;
