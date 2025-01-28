import Header from '@/components/Header'
import { serviceData } from '@/utils/staticData'
import Image from 'next/image'
import React from 'react'
import { FaUser } from 'react-icons/fa6'
import ClientSection from '../../(root)/section/ClientSection'
import ContactSection from '../../(root)/section/ContactSection'
import PrimaryScroll from '@/animations/PrimaryScroll'
import axios from 'axios'

const ProjectPage = async ({params}) => {
  const {name} = await params
  const main = 'optimize your fitness journey'
  const mainWords = main.split(' ');

  const fetchProjectData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project/${name}`)
      if (response.status === 200) {
        return response.data.data
      } else {
        console.error('Error fetching blog data')
        return null
      }
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }

  const projectData = await fetchProjectData()

  const DetialBox = ()=> {
    return(
      <div className="border p-6">
        <h1 className=' font-heading capitalize text-lg mb-3'>problem statement</h1>
        <p className=' text-heading-default capitalize text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum nostrum repellendus perspiciatis voluptatibus pariatur mollitia magnam possimus id accusamus.</p>
      </div>
    )
  }

  const Conclusion=({className})=>(
    <div className={className}>
      <PrimaryScroll>
        <h1 className=' font-heading text-2xl uppercase  mb-4'>conclusion</h1>
      </PrimaryScroll>
      <PrimaryScroll>
        <p className=' text-paragraph-default capitalize mb-5'>{projectData.conclusion}</p>           
      </PrimaryScroll>
    </div>
  )

  const TechTable = () =>{
    let stack = projectData.technologyStack.stack
    
    return(
        <table className="table-auto w-full rounded-lg border-collapse border bg-paragraph-default/10 border-background-default">
            <tbody>
            {Object.entries(stack).map(([category, technologies], index) => {
                    return (
                        <tr key={index} className="border border-background-default">
                            <td className="capitalize pr-5 font-heading text-lg border border-background-default p-4">
                                {category}
                            </td>
                            <td className="capitalize border font-heading text-lg border-background-default p-4">
                                {technologies.join(', ')} {/* Joining the array of technologies with commas */}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
  }

  const InfoBox = ({heading,value}) =>{
    return(
        <PrimaryScroll className=" space-y-6">
            <h1 className=' font-heading text-heading-default uppercase text-2xl'>{heading}</h1>
            <ul className=' space-y-1 text-paragraph-default font-light '>
                {value.map((item,index)=>(
                    <li key={index} className={`${heading =='client' && index==1?' text-primary-default':'capitalize'}`}>{item}</li>
                ))}
            </ul>
        </PrimaryScroll>
    )
  }

  return (
    <section className=' space-y-6'>
      <Header name={name} description={''}/>
      <div className="main flex flex-col justify-center space-y-14 items-center">
        <PrimaryScroll className={'w-full'}>
          <Image src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>  
        </PrimaryScroll>
        <div className="space-y-10 w-full">
            <div className="info flex flex-col lg:flex-row gap-14 lg:gap-24 !my-24">
                <InfoBox heading={'client'} value={['unityr techlabs','www.unityr.com']}/>
                <InfoBox heading={'date'}  value={['from may 2025','to june 2025']}/>
                <InfoBox heading={'executors'}  value={['mohammed nowfal','gopika']}/>
            </div>
            {/* <div className="sologan-info ">
                <h1 className=' font-heading text-4xl text-heading-default uppercase'>about <span className=' font-heading text-primary-default'>project</span></h1>
            </div> */}
            <div className="description">
                <PrimaryScroll>
                  <h1 className=' font-heading mb-4 text-4xl text-heading-default uppercase'>about <span className=' font-heading text-primary-default'>project</span></h1>
                </PrimaryScroll>
                <ul className=' space-y-3'>
                    {projectData.details.map((item,index)=>(
                      <PrimaryScroll key={index} delay={index/10}>
                        <li  className=' text-paragraph-default leading-relaxed capitalize'>{item}</li>
                      </PrimaryScroll>
                    ))}
                </ul>
            </div>
            <div className="details space-y-10">
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {Array.from({length:3}).map((item,index)=>(
                <DetialBox key={index}/>
                ))}
            </div> */}
            <div className="problem">
                <PrimaryScroll>
                  <h1 className=' font-heading text-2xl uppercase mb-4'>statement</h1>
                </PrimaryScroll>
                <PrimaryScroll>
                  <p className=' text-paragraph-default capitalize'>{projectData.statement}</p>
                </PrimaryScroll>
            </div>
            <div className="tech">
                <PrimaryScroll>
                  <h1 className=' font-heading text-2xl uppercase  mb-4'>technology stack</h1>
                </PrimaryScroll>
                <div className="flex flex-col xl:flex-row xl:gap-14 gap-6">
                    <div className="xl:w-1/2 space-y-6">
                        <PrimaryScroll>
                          <p className=' text-paragraph-default capitalize mb-5'>{projectData.technologyStack.paragraph}</p>           
                        </PrimaryScroll>
                        <Conclusion className={'hidden !mt-10 xl:block'}/>
                    </div>
                <PrimaryScroll className="xl:w-1/2">
                    <TechTable/>
                </PrimaryScroll>
                <Conclusion className={'block !mt-10 xl:hidden'}/>
                </div>
            </div>
            </div>
        </div>
      </div>
      <ClientSection/>
      <ContactSection/>
    </section>
  )
}

export default ProjectPage
