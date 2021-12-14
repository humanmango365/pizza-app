import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { setCategoryAC } from "../../store/reducers";
import { DispatchType } from "../../store/store";

interface ICategories {
  items: string[];
  onClick: (name: string) => void;
  setCategory: (category: number | null) => void;
}

const Categories: FC<ICategories> = ({ items, onClick, setCategory }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            setActiveCategory(null);
            setCategory(null);
          }}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((item, idx) => (
            <li
              className={idx === activeCategory ? "active" : ""}
              onClick={() => {
                setActiveCategory(idx);
                setCategory(idx);
              }}
              key={`${item}_${idx}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch: DispatchType) => ({
  setCategory: (category: number | null) => {
    dispatch(setCategoryAC(category));
  },
});

export default connect(null, mapDispatchToProps)(Categories);
