import Link from 'next/link';

const Films = ({ films }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl font-bold mb-3">
        {films &&
          films.data.map((film) => {
            return (
              <li key={film.id}>
              <Link href={`film/` + film.id }>
               {film.attributes.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Films;

/* 11             <Link href={`film/` + film.attributes.slug}>
                  {film.attributes.title}
                </Link>
                
                <a href={`film/` + film.id}>{film.attributes.title}</a>
                */
               //{film.attributes.title}


               //<Link href={`film/` + film.attributes.slug.concat(film.id) }></Link>

