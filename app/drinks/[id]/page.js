import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import img from "./my img.jpg";
console.log(img);

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  console.log(params);
  console.log(data);

  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(title, imgSrc);

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
        // quality={100}
      />
      {/* <Image src={img} className="w-48 h-48 rounded-lg" alt="drink" /> */}
      <div className="text-4x mb-8"> {title} </div>
    </div>
  );
};

export default SingleDrinkPage;
