import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSortMethodAC } from "../../store/reducers";
import { sortMethodType } from "../../store/reducers/types";

interface ISortPopup {
  setIsPopupVisible: (arg: boolean) => void;
  selectSort: (sort: number) => void;
  sortMethod: number;
}

type sortMethodsType = {
  name: string;
  type: sortMethodType;
};
export const sortMethods: sortMethodsType[] = [
  { name: "популярности", type: "popularity" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const SortPopup: FC<ISortPopup> = ({
  setIsPopupVisible,
  selectSort,
  sortMethod,
}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    const listener = () => {
      setIsPopupVisible(false);
    };
    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [setIsPopupVisible]);

  return (
    <div className="sort__popup">
      <ul>
        {sortMethods.map((sort, idx) => (
          <li
            className={idx === sortMethod ? "active" : ""}
            onClick={() => {
              selectSort(idx);
              dispatch(setSortMethodAC(sort.type))
            }}
            key={`${sort.name}_${idx}`}
          >
            {sort.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default React.memo(SortPopup);
