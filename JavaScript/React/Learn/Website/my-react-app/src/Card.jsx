import Profilepic from './assets/TechStacks.png';

function card(){
  return(
    <div className="Card">
      <img className="card-img" src={Profilepic} alt=""/>
      <h2>Nextron</h2>
      <p>I am a selftaught developer</p>
    </div>
  );
}

export default card