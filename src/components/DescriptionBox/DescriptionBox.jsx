import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis
          iste magnam reiciendis veniam commodi voluptatum quaerat voluptatibus
          sit cupiditate recusandae aliquid aspernatur nam a fugit suscipit,
          laboriosam deserunt quas libero eveniet corrupti impedit. Impedit
          facilis eveniet nesciunt est perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          nihil qui deleniti maxime illo doloremque ipsum, nesciunt laudantium
          pariatur eaque consectetur odit. Corporis dolore quasi adipisci
          consequuntur! Voluptatum, dolor officiis nesciunt, placeat vero
          repudiandae veritatis hic debitis tempora consequuntur molestias
          reprehenderit dolores autem ab, omnis alias reiciendis magni rem
          consectetur!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
