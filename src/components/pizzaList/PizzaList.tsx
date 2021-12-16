import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { StoreType } from '../../store/store'
import { IPizzaItem } from '../../types'
import PizzaItem from './PizzaItem'



const PizzaList:FC = () => {
  
  const pizzas:IPizzaItem[] = useSelector(({pizzasStore}: StoreType) => pizzasStore.pizzas)
  
  return (
    <div className="content__items">
        {pizzas && pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza}/>)}
      </div>
  )
}

export default PizzaList;
