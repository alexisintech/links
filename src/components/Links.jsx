import Link from "./link";

let linksList = [
  {
    title: "Portfolio",
    link: "https://alexisintech.github.io",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/alexisintech/",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/alexisintech",
  },
  {
    title: "Github",
    link: "https://github.com/alexisintech",
  },
];

const Links = () => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center gap-6">
      {linksList.map((link, index) => (
        <Link key={index} title={link.title} to={link.link} />
      ))}
    </div>
  );
};

export default Links;
