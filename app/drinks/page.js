"use client";

import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // rethrow the error to handle it at the higher level if needed
  }
};

const Drinks = async () => {
  const result = await fetchDrinks();
  return (
    <div>
      <DrinksList result={result} />
    </div>
  );
};
export default Drinks;
