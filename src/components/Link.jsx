const Link = ({ title, to }) => {
  return (
    <div>
      <a href={to} target="_blank">
        <div class="button text-lg">{title}</div>
      </a>
    </div>
  );
};

export default Link;
