import React, { useEffect, useState, useRef, useCallback } from "react";
import NextImage from "../../BUETB.jpg";

const newsItems = [
  {
    key: "T-SHIRT UNDER BDT 500",
  },
  {
    key: "MAKE YOUR SUMMER COMFORTABLE",
  },
  {
    key: "T-SHIRT UNDER BDT 500",
  },
  {
    key: "MAKE YOUR SUMMER COMFORTABLE",
  },
  {
    key: "MAKE YOUR SUMMER COMFORTABLE",
  },
];

const Element = (props) => {
  const { title } = props;

  return (
    <div className="styles.element">
      {title}
      <span className="styles.sloganIcon">
        <NextImage src={'new-home/logo-symbol.png'} alt="Logo" width={20} height={20} />
      </span>
    </div>
  );
};

const BottomSlogan = () => {
  const [items, setItems] = useState(newsItems);
  const wrapperRef = useRef(null);
  const indexRef = useRef(null);

  const handleRefUpdate = useCallback(
    (node) => {
      if (node !== null && items.length > 0) {
        indexRef.current = node.firstChild;
        document.documentElement.style.setProperty(
          "--animationDistance",
          `${0 - indexRef.current.offsetWidth}px`
        );
        document.documentElement.style.setProperty(
          "--animationDuration",
          `${Math.round(indexRef.current.offsetWidth / 33)}s`
        );
        if (wrapperRef.current) {
          wrapperRef.current.classList.add("styles.moving");
        }
      }
    },
    [items]
  );

  const handleLoop = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.remove("styles.moving");
      wrapperRef.current.style.animation = "none";
      wrapperRef.current.style.animation = "";
      shiftNext([...items]);
    }
  };

  const shiftNext = (copy) => {
    const firstitem = copy.shift();
    copy.splice(copy.length, 0, firstitem);
    setItems(copy);
  };

  const handleAnimationEnd = () => {
    handleLoop();
  };

  useEffect(() => {
    const node = wrapperRef.current;
    if (node) {
      handleRefUpdate(node);
    }
  }, [handleRefUpdate]);

  return (
    <div className="styles.wrapper">
      <div className="styles.inner" ref={wrapperRef} onAnimationEnd={handleAnimationEnd}>
        {items.map((obj, index) => (
          <Element title={obj.key} key={obj.key + index} />
        ))}
      </div>
    </div>
  );
};

export default BottomSlogan;
