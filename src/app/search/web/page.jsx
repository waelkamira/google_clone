import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";
import { RiH1 } from "react-icons/ri";

export default async function WebSearchPage({ searchParams }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );
  if (!response) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  // console.log(data);
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No Results Found</h1>
        <p className="text-lg ">
          Try Something Else Or Go Back To The Home Page{" "}
          <Link className="text-blue-500" href="/">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && <WebSearchResults results={data} />}</>;
}
