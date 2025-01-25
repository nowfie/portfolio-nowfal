import Header from '@/components/Header'
import { serviceData } from '@/utils/staticData'
import Image from 'next/image'
import React from 'react'
import { FaUser } from 'react-icons/fa6'
import ClientSection from '../../(root)/section/ClientSection'
import ContactSection from '../../(root)/section/ContactSection'

const ProjectPage = async ({params}) => {
  const {name} = await params
  const main = 'optimize your fitness journey'
  const mainWords = main.split(' ');

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
      <h1 className=' font-heading text-2xl uppercase  mb-4'>conclusion</h1>
      <p className=' text-paragraph-default capitalize mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quisquam dolor ab? Illo, quibusdam, quidem culpa quaerat eius consectetur rerum sunt error esse suscipit assumenda asperiores, sequi recusandae saepe cumque nam nisi neque corporis soluta!</p>           
    </div>
  )

  const TechTable = () =>{
    return(
        <table className="table-auto w-full rounded-lg border-collapse border bg-paragraph-default/10 border-background-default">
            <tbody>
            <tr className="border border-background-default">
                <td className=" pr-5  font-heading text-lg uppercase  border border-background-default p-4">languages</td>
                <td className=" border font-heading text-lg uppercase  border-background-default p-4">python, javascript</td>
            </tr>
            <tr className="border border-background-default">
                <td className=" capitalize pr-5  font-heading text-lg border border-background-default p-4">frontend</td>
                <td className=" capitalize border font-heading text-lg border-background-default p-4">react, tailwind, framer motion</td>
            </tr>
            <tr className="border border-background-default">
                <td className=" capitalize pr-5  font-heading text-lg border border-background-default p-4">backend</td>
                <td className=" capitalize border font-heading text-lg border-background-default p-4">django</td>
            </tr>
            <tr className="border border-background-default">
                <td className=" capitalize pr-5  font-heading text-lg border border-background-default p-4">database</td>
                <td className=" capitalize border font-heading text-lg border-background-default p-4">mysql</td>
            </tr>
            <tr className="border border-background-default">
                <td className=" capitalize pr-5  font-heading text-lg border border-background-default p-4">others</td>
                <td className=" capitalize border font-heading text-lg border-background-default p-4">razor pay</td>
            </tr>
            </tbody>
        </table>
    )
  }

  const InfoBox = ({heading,value}) =>{
    return(
        <div className=" space-y-6">
            <h1 className=' font-heading text-heading-default uppercase text-2xl'>{heading}</h1>
            <ul className=' space-y-1 text-paragraph-default font-light '>
                {value.map((item,index)=>(
                    <li key={index} className={`${heading =='client' && index==1?' text-primary-default':'capitalize'}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
  }

  return (
    <section className=' space-y-6'>
      <Header name={'fito fitness the fitness optimizer'} description={''}/>
      <div className="main flex flex-col justify-center space-y-14 items-center">
        <Image src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>  
        <div className="space-y-10 ">
            <div className="info flex flex-col lg:flex-row gap-14 lg:gap-24 !my-24">
                <InfoBox heading={'client'} value={['unityr techlabs','www.unityr.com']}/>
                <InfoBox heading={'date'}  value={['from may 2025','to june 2025']}/>
                <InfoBox heading={'executors'}  value={['mohammed nowfal','gopika']}/>
            </div>
            {/* <div className="sologan-info ">
                <h1 className=' font-heading text-4xl text-heading-default uppercase'>about <span className=' font-heading text-primary-default'>project</span></h1>
            </div> */}
            <div className="description">
                <h1 className=' font-heading mb-4 text-4xl text-heading-default uppercase'>about <span className=' font-heading text-primary-default'>project</span></h1>
                <ul className=' space-y-3'>
                    {serviceData[1].details.map((item,index)=>(
                    <li key={index} className=' text-paragraph-default leading-relaxed capitalize'>{item}</li>
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
                <h1 className=' font-heading text-2xl uppercase mb-4'>statement</h1>
                <p className=' text-paragraph-default capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, itaque. Laboriosam natus ipsum, dolor debitis dolores labore ullam eum! Temporibus rerum nihil culpa, aspernatur, necessitatibus dolor aliquid omnis possimus esse hic tenetur. Error aliquid debitis repellat accusantium excepturi temporibus non iste optio, corporis consequatur explicabo totam quisquam? Recusandae unde totam, rerum nisi enim inventore voluptate corporis rem incidunt a, quisquam perferendis sint similique iste exercitationem est temporibus earum itaque molestias, nobis officiis. Quaerat aliquam harum sed minima quis, laborum vel, officia totam mollitia molestias, fugit ullam iste. Neque unde qui accusamus, vero obcaecati at voluptates quisquam, sint, nulla nihil nisi repellat aut voluptatum dicta praesentium fugit minima! Porro tempora minima eligendi, ducimus laudantium fuga ad qui at excepturi veniam provident laboriosam itaque, sit explicabo? Accusantium porro inventore natus, in soluta recusandae veritatis assumenda quisquam fugit modi rerum, rem officiis! Atque unde nemo aliquam explicabo mollitia exercitationem, perspiciatis iste dolore quidem.</p>
            </div>
            <div className="tech">
                <h1 className=' font-heading text-2xl uppercase  mb-4'>technology stack</h1>
                <div className="flex flex-col xl:flex-row xl:gap-14 gap-6">
                    <div className="xl:w-1/2 space-y-6">
                        <p className=' text-paragraph-default capitalize mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sit magni voluptatibus quidem rerum dolore dolorum quas sapiente, eum totam dignissimos harum, quisquam minus accusamus quaerat maiores cupiditate repudiandae eaque voluptate fugiat. Commodi nihil, non nostrum quos amet quidem cumque, corporis, quibusdam aliquam hic exercitationem deleniti maxime repudiandae. Doloremque, iusto?</p>           
                        <Conclusion className={'hidden !mt-10 xl:block'}/>
                    </div>
                <div className="xl:w-1/2">
                    <TechTable/>
                </div>
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
