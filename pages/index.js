import Head from "next/head";
import Card from "../components/Card";
import { gql, GraphQLClient } from "graphql-request";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
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
  // set search state to display search bar
  const [search, setSearch] = useState(false)
 // state to pass into card and search component
  const [itemsArray, setItemsArray] = useState([])

  const companiesMap = companies.map((company) => {
    return (
      <Card
        key={company.id}
        search={search}
        setSearch={setSearch}
        setItemsArray={setItemsArray}
        itemsArray={itemsArray}
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

  return (
    <>
      <Head>
        <title>Job Listings With Filtering</title>
        <meta name="description" content="Job Listings With Filtering" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`flex flex-col items-center w-full ${search ? '' : ""}`}>
      <div className="w-full header--img"></div>
        { search ? <SearchBar 
          companies={companies}
          setSearch={setSearch}
          setItemsArray={setItemsArray}
          itemsArray={itemsArray}
          /> : ""}
      </header>
      <main className='flex flex-col items-center w-full'>
        {companiesMap}
      </main>
    </>
  );
}
