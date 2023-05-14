import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Hello everyone, my name is Kubra and I am thrilled to introduce myself as a web developer specializing in the MERN stack. With experience in building web applications, I have developed a strong passion for creating dynamic and interactive websites. My expertise lies in developing applications using a combination of MongoDB, Express, React, and NodeJS. From conceptualizing and designing to development and deployment, I have a proven track record of delivering high-quality projects on time and within budget. Whether it's building websites from scratch or revamping existing ones, I have the skills and knowledge required to create compelling and engaging web experiences for users. I'm excited to collaborate and share my skills with you.</p>
        <br />
        <p className='text-xl'>
        As a business owner, you are always on the lookout for ways to upscale and take your business to the next level. My service is designed to do just that! By utilizing my expertise and cutting-edge tools, I can provide you with invaluable insights into your market, competition, and consumer behavior. With this information, you can make informed decisions about product offerings, pricing strategies, and marketing campaigns. By partnering with me, you can expect to see improvements in customer engagement, conversions, and ultimately, profits. Let's work together to take your business to new heights!
        </p>
      </div>
    </div>
  )
}

export default About