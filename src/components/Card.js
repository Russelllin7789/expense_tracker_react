import './Card.css'

const Card = (props) => {
  // to use the class set on the parent component, and the 'blank_' after className 'card' is very important!!
  const classes = 'card ' + props.className;

  // use 'props.children' to make the settings functionalize in children component!!
  return <div className={classes}>{props.children}</div>
}

export default Card