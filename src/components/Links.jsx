import Link from "./link";

let linksList = [
  {
    title: "Portfolio",
    link: "",
  },
];

const Links = () => {
  return (
    <div className="row-span-7">
      {linksList.map((link, index) => (
        <Link key={index} title={link.title} to={link.to} />
      ))}
    </div>
  );
};

export default Links;
