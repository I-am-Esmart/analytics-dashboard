import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ result }) => {
  console.log(result);
  const data = result.drinks;
  return (
    <ul className="grid sm:grid-cols-2 gap-6">
      <p>drink list</p>
      {data.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link href={`/drinks/${drink.idDrink}`}>
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw"
                  alt={drink.strDrink}
                  className="rounded-md object-cover"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
