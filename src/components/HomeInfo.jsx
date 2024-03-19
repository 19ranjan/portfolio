import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center  justify-center neo-brutalism-white py-4 px-8 text-black mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-pink-600'>Harshita</span>
        
        <br />
       Welcome to my profile
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box justify-center neo-brutalism-white'>
        <p className='font-medium sm:text-2xl text-center  text-pink-600 py-4 px-8 text-black'>
          Skills and Previous Experiences <br />
        </p>

        <Link to='/about'  className='sm:text-xl pink-brutalism-white bg-gray-200 neo-btn'>
         Click to see
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box neo-brutalism-white justify-center'>
        <p className='font-medium sm:text-3xl text-center  text-pink-600 py-4 px-8'>
          Enhanced my skills through <br /> working on these projects
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div 
      // className='info-box neo-brutalism-white left-20 justify-center right-0'
      >
      {/* <p className='font-medium sm:text-xl text-center  text-pink-600 py-4 px-8'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p> */}

      <Link to='/contact' className='neo-brutalism-white neo-btn justify-left'>
        Contact
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;