import React, { FC } from 'react'
import { connect } from 'react-redux'
import { StoreType } from '../../store/store'
import { IPizzaItem } from '../../types'
import PizzaItem from './PizzaItem'



const PizzaList:FC<{pizzas: IPizzaItem[] | []}> = ({pizzas}) => {
  
  
  return (
    <div className="content__items">
        {pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza}/>)}
      </div>
  )
}

const mapStateToProps = (state: StoreType) => ({
  pizzas: state.pizzasStore.pizzas
})

export default connect(mapStateToProps)(PizzaList)
