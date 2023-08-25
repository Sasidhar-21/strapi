import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="font-bold text-5xl">Hello world</h1>
    </Layout>
    
  );
}

/*
export async function getStaticProps() {
  const filmsResponse =await fetch("http://localhost:1337/api/films");
  const data =await filmsResponse.json();

  console.log(data);
  return {
    props: {
      
    },
  };
}
*/

//films: filmsResponse,
