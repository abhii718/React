import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;
          return (
            <>
              <div className="main-card--container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle "> {name}</span>
                    <h2 className="card-title">{category}</h2>
                    <span className="card-descreption subtle">
                      {description}
                    </span>
                    <div className="card-reaad">read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle"> Order Now </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
