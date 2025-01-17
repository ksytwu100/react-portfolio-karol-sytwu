/*eslint-disable react/prop-types*/

export default function Project({item}) {
  return (
    <div className = "project">
        <img src={item.image} alt="My Blog" />
        <h3>{item.name}</h3> 
        <div className="links">
         {
          item.github && <a href={item.github} target="_blank">Github</a>  //blank = Open new tab 
         }
          {
            item.deployed && <a href={item.deployed} target="_blank">{item.name === "MongoDB Social Network" ? "View demo" : "Live site"}</a>
            
          }
        </div>
    </div>

  )
}
