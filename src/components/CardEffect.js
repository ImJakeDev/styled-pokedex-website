import React, { createRef, useState } from "react";

const CardEffect = (props) => {

  const cardEl = createRef();

  const card = "card";
  const hoverCard = "hoverCard"
  const pokemonCard = "pokemonCard";

  const [cardClass, setCardClass] = useState(card);

  const { id, imageUrlHiRes, name } = props.pokemon;

  const altText = `${name}'s Pokemon Card`

  // const mouseMove = (e) => {

  //   const addClassFun = (elements, myClass) => {
  //     // if there are no elements, we're done
  //     if (!elements) {
  //       return;
  //     }
  //     // if we have a selector, get the chosen elements
  //     if (typeof elements === "string") {
  //       elements = document.querySelectorAll(elements);
  //     }
  //     // if we have a single DOM element, make it an array to simplify behavior
  //     else if (elements.tagName) {
  //       elements = [elements];
  //     }
  //     // add class to all chosen elements
  //     for (var i = 0; i < elements.length; i++) {
  //       // if class is not already found
  //       if (
  //         (" " + elements[i].className + " ").indexOf(" " + myClass + " ") < 0
  //       ) {
  //         // add class
  //         elements[i].className += " " + myClass;
  //       }
  //     }
  //   };

  //   const removeClassFun = (elements, myClass) => {
  //     // if there are no elements, we're done
  //     if (!elements) {
  //       return;
  //     }
  //     // if we have a selector, get the chosen elements
  //     if (typeof elements === "string") {
  //       elements = document.querySelectorAll(elements);
  //     }
  //     // if we have a single DOM element, make it an array to simplify behavior
  //     else if (elements.tagName) {
  //       elements = [elements];
  //     }
  //     // create pattern to find class name
  //     var reg = new RegExp("(^| )" + myClass + "($| )", "g");
  //     // remove class from all chosen elements
  //     for (var i = 0; i < elements.length; i++) {
  //       elements[i].className = elements[i].className.replace(reg, " ");
  //     }
  //   };

  //   console.log(e.target);
  //   console.log(e);
  //   console.log(e.type);

  //   const l = e.clientX;
  //   const t = e.clientY;
  //   console.log(l, t);

  //   let para = e.relatedTarget ? e.relatedTarget.tagName : "unknown";
  //   console.log(para);

  //   let compStyles = getComputedStyle(cardEl.current);

  //   const h = compStyles.getPropertyValue("height");
  //   const w = compStyles.getPropertyValue("width");
  //   console.log(h, w);

  //   const h2 = Number(h.includes("px") ? h.slice(0, 3) : h);
  //   const w2 = Number(w.includes("px") ? w.slice(0, 3) : w);
  //   console.log(h2, w2);

  //   // const h = cardItem.height();
  //   // const w = cardItem.width();

  //   const lp = Math.abs(Math.floor((100 / w2) * l) - 100);
  //   const tp = Math.abs(Math.floor((100 / h2) * t) - 100);
  //   console.log(lp, tp);

  //   const bg = `background-position: ${lp}% ${tp}%;`;
  //   style = `.card.active:before { ${bg} }`;
  //   // card = removeClassFun(para, "active");
  //   card = addClassFun(para, "active");
  //   // style.html(style);
  // }

  // const mouseOut = (e) => {
  //   console.log(e.target);
  //   let para = e.relatedTarget ? e.relatedTarget.tagName : "unknown";
  //   console.log(para);
  //   // card.removeClass("active");
  // }

  return (
    <li
      key={props.index + id}
      className="pokeCard"
    >
      <div>
        <div
          style={{ backgroundImage: `url("${imageUrlHiRes}")` }}
          onMouseEnter={() => {
            setCardClass(hoverCard);
          }}
          onMouseLeave={() => {
            setCardClass(card);
          }}
          className={cardClass}
          alt={altText}
          ref={cardEl}
        ></div>
      </div>
    </li>
  );
};

export default CardEffect;
