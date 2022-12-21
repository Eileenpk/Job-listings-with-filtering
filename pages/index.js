import Head from "next/head";
import Card from "../components/Card";
import { gql, GraphQLClient } from "graphql-request";
// make getStaticProps query

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query Companies {
      companies {
        logo {
          url
        }
        id
        companyName
        contract
        featured
        location
        isNew
        position
        postedAt
        role
        level
        languages
        tools
        slug
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const companies = data.companies;

  return {
    props: {
      companies,
    },
  };
};

export default function Home({ companies }) {
  console.log(companies);
  const companiesMap = companies.map((company) => {
    // const [id, companyName, contract, featured, location, isNew, position, postedAt, role, level, languages, tools]
    return (
      <Card
        key={company.id}
        companyName={company.companyName}
        contract={company.contract}
        featured={company.featured}
        location={company.location}
        isNew={company.isNew}
        position={company.position}
        postedAt={company.postedAt}
        role={company.role}
        level={company.level}
        languages={company.languages}
        tools={company.tools}
        logo={company.logo}
      />
    );
  });
  // state to hold objects in array

  // assign filter function to var
  return (
    <>
      <Head>
        <title>Job Listings With Filtering</title>
        <meta name="description" content="Job Listings With Filtering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mb-[56px]"></header>
      <main className='flex flex-col items-center w-full'>
        {/* {use filter function to display cards that should be shown} */}
        {/* {map over data to display cards} */ companiesMap}
        {/* {pass state down to cards as props} */}
      </main>
    </>
  );
}
