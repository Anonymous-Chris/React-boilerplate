export default function FancyBorder(props) {
  return (
    <div className={"FancyBorder " + props.color}>
      {console.log(props.children, props)}
      {props.children}
    </div>
  );
}
