const Card = ({users}) => {
  return(
    <>
        {
            users.map((curUser)=>{
                const {image,title,price}= curUser;
                return (
                    <div className="card">
                    <img className="image" src={image} alt="" />
                    <h3>{title}</h3>
                    <p>Price: {price}$</p>
                    <button className="btn">Go</button>
                    </div>
                )
            })
        }
    </>
  );
}

export default Card;
