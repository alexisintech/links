import avatar from "../assets/avatar.jpg";

const Hero = () => {
  return (
    <div className="row-span-4">
      <section>
        <img
          className="w-3/12 rounded-full"
          src={avatar}
          alt="@alexisxdawn Profile Picture | picture of alexisintech | picture of alexisxdawn | picture of Alexis Aguilar"
        />
      </section>

      <h2>Alexis Aguilar | Software Engineer</h2>
    </div>
  );
};

export default Hero;
