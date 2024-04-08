import React from 'react';

function Portfolio() {
  return (
    <div>
<nav className="bg-black">
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
  <p className="text-white text-left   mx-20 relative top-16 py-14 sm:top-10 sm:left-10 lg:top-20 lg:left-20">Hello there!,i am called</p>
  <h1 className="text-white font-bold text-5xl text-left mx-40 mb-4 pt-2 md:my-4">Elie Joseph MUCYO</h1>
<p className="text-white text-left mx-40 mb-4 md:my-4">I started to learn programming in real process since october 2023 to now and i work hard inorder</p>
<p className="text-white text-left mx-40 mb-4 md:my-4">to accopmlish yet my goals wll that i wish it</p>
<button className="bg-orange-800 mx-40 w-40 h-10 rounded-sm "><a href="#contact me">Contact me</a></button>
</div>
</div>
  );
}
export default Portfolio;

