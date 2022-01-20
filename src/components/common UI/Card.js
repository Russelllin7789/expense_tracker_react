import './Card.css'

const Card = (props) => {
  // 1. to use the class set on the parent component, and the 'blank_' after className 'card' is very important!!
  const classes = 'card ' + props.className;
  // 2. also can use the codes below to achieve exactly the same effect
  // return <div className=`${classes.card} ${props.className}`>{props.children}</div>

  // use 'props.children' to make the settings functionalize in children component!!
  return <div className={classes}>{props.children}</div>
}

export default Card