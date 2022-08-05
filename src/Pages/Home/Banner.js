import React from 'react';
import { Link } from 'react-router-dom';
import bannerimage from '../../assets/3958832.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero  bg-base-200 py-5 lg:max-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse md:flex-row-reverse">
          <div className="flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <img src={bannerimage} alt="" className="rounded" />
          </div>
          <div className="text-center text-lg px-5 lg:text-left md:my-5">
            <h1 className="text-5xl font-bold">Wants to Scheduled?</h1>
            <p className="py-6 ">
              The fastest and easiest way to schedule any meeting or other
              collaboration.
            </p>
            <Link to="">
              <button className="btn bg-orange-600 border-none text-white rounded-lg hover:bg-orange-500 ">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
