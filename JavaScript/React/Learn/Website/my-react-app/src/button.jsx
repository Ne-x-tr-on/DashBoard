function Button(){
  const handleClick = (name) => console.log(`${name} You did not Click me Dincha`);
  return (
    <button onClick={ ()=> handleClick("Nextron")} className="button">ClickMe</button>
  );
}

export default Button;