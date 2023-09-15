/*import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';


const Film = ({ film }) => {
    console.log(film)
    return (
        
          <Layout>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    {film.attributes.title}
                </span>                
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                   Director: {film.attributes.director}
                </span>                
            </h1>            
        </Layout>

    );
        
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const filmResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films/${slug}`);
    //console.log(slug)
    return{
        props: {
            film: filmResponse.data,
        },
};
}

export default Film;
*/





import React from 'react';
import { fetcher } from '../../lib/api'; 
import Layout from '../../components/Layout';
import useSWR from 'swr';

const Film = ({ film }) => {
  // Fetch related reviews data
  const { data: reviewsData } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews?film.id=${film.id}`,
    fetcher
  );

  return (
    <div>
          <Layout>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    {film.attributes.title}
                </span>                
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                   Director: {film.attributes.director}
                </span>                
            </h1> 
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                   Plot: {film.attributes.plot}
                </span>                
            </h1> 
                  <h2>Reviews:</h2>
      <ul>
        {reviewsData &&
          reviewsData.data.map((reviews) => (
            <li key={reviews.id}>
              <p>{reviews.attributes.reviewer} : {reviews.attributes.review}</p>
            </li>
          ))}
      </ul>          
        </Layout>

    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const filmResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/films?slug=${slug}`
  );

  return {
    props: {
      film: filmResponse.data[slug-1],
    },
  };
}

export default Film;




/*

import React from 'react';
import { fetcher } from '../../lib/api'; // Import your API fetching utility
import useSWR from 'swr';
import { useRouter } from 'next/router';

const Film = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch film data by slug
  const { data: filmData } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/films?slug=${slug}`,
    fetcher
  );

  if (!filmData) {
    return <div>Loading...</div>;
  }

  const film = filmData.data[0];
  return (
    <div>
      <h1>{film.attributes.title}</h1>
      <ReviewsSection filmId={film.id} />
    </div>
  );
};

const ReviewsSection = ({ filmId }) => {

  // Fetch related reviews data for the film
  const { data: reviewsData } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews?film.id=${filmId}`,
    fetcher
  );

  return (
    <div>
      
      <h2>Reviews:</h2>
      <ul>
        {reviewsData &&
          reviewsData.data.map((reviews) => (
            <li key={reviews.id}>
              <p>{reviews.attributes.reviewer}</p>
              <p>{reviews.attributes.review}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Film;
*/






