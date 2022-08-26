import "./Card.css";
const Card = (probs) => {
  const classes = "card " + probs.className;
  return <div className={classes}>{probs.children}</div>;
};

export default Card;
