import React from 'react';

function Portfolio() {
  return (
    <div className="w-full">
<nav className="bg-black w-full">
  <ul className=" bg-gray-800 w-full h-20  flex items-center justify-end mr-20 ">
  <h1 className="float-left mx-4 text-green-500 my-4 md:my-6 "> portfolio website</h1>
    <li className="float-right mx-4 my-4 md:my-10"><a href="#home" className="text-white">Home</a></li>
    <li className="float-right mx-4 my-4 md:my-10"><a href="#about me " className="text-white">About me</a></li>
    <li className="float-right mx-4 my-4 md:my-10"><a href="#contact me" className="text-white">Contact me</a></li>
    <li className="float-right mx-4 my-4 md:my-10 "><a href="#project" className="text-white">Project</a></li>
    <li className="float-right mx-4 -my-4 md:my-10"><a href="#service" className="text-white">Service</a></li>
  </ul>
</nav>
<div className="bg-black w-full h-85 item-center justify-end fixed py-16">
  <p className="text-white text-left   mx-20 relative top-16 py-14 sm:top-10 sm:left-10 lg:top-20 lg:left-20 ">Hello there!,i am called</p>
  <h1 className="text-white font-bold text-5xl text-left mx-40 mb-4 pt-2 md:my-4">Elie Joseph MUCYO</h1>
<p className="text-white text-left mx-40 mb-4 md:my-4 ">I started to learn programming in real process since october 2023 to now and i work hard inorder</p>
<p className="text-white text-left mx-40 mb-4 md:my-4 ">to accopmlish yet my goals wll that i wish it</p>
<button className="bg-orange-800 mx-40 w-40 h-10 rounded-sm "><a href="#contact me">Contact me</a></button>
</div>
<div className="bg-black"> 
  <h1 >About me</h1>
        <p className="">I am a beginner in software career on my dream i want to reach on the professional</p>
        <p className="">in software career mean that i want to be software developer at global level and</p>
        <p className="">i am able to learn the following language,framework and library like javascript</p>
        <p className="">HTML,CSS,Mongo DB,Boostrap,React.js,Node.js,Next.js,Angular.js,reactNative,Express.js and TypeScript</p>
        <p className="">so if i graduate to learn these i will celebrate because in many purposes that i want to</p>
        <p className="">accomplish yet may be i have reached on the one in many objectives that i wish to achieve</p>

</div>
</div>
  );
}
export default Portfolio;

