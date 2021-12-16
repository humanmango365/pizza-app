import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryAC } from "../../store/reducers";

interface ICategories {}

const Categories: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const dispatch = useDispatch();
  const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const onSelectCategory = useCallback((index: number | null) => {
    setActiveCategory(index);
    dispatch(setCategoryAC(index));
  }, []);
  
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onSelectCategory(null);
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
                onSelectCategory(idx);
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

export default Categories;
