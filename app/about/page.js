import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
      <p>
        <Link href="/about/info" className="text-2xl">
          info page
        </Link>
      </p>
    </div>
  );
};
export default AboutPage;
