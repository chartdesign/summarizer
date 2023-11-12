import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <p className='bluer_gradient text-4xl'>GistGenie</p>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/chartdesign/summerizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text bluer_gradient mb-2'>
        Get the gist of any article in seconds! <br className='max-md:hidden' />
      </h1>
      <h2 className='desc'>
        GistGenie is the revolutionary web app that transforms lengthy reads
        into concise, clear summaries. Whether you're a busy professional, a
        curious learner, or just someone with a packed schedule, GistGenie is
        your go-to tool for quick insights. Unveil the essence of complex
        articles with a simple click. With GistGenie, you're not just saving
        time—you're unlocking a world of knowledge, effortlessly. Get the gist,
        expand your understanding, and stay informed, all with the magic of
        GistGenie!
      </h2>
    </header>
  );
};

export default Hero;
