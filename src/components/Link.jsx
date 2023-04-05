const Link = ({ title, to }) => {
  return (
    <div>
      <a href={to} target="_blank">
        <div class="button">{title}</div>
      </a>
    </div>
  );
};

export default Link;
