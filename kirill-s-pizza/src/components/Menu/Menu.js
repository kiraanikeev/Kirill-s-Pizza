import React, {useContext} from 'react'
import { dataMenu } from './DataMenu'
import styles from './Menu.module.css'
import {BasketContext} from '../../context'
import { NavLink } from 'react-router-dom'
function Menu() {

const{basket, setBasket} = useContext(BasketContext)

function addBasket(pizza){
const exist = basket.find((item)=>item.id === pizza.id)
if (exist){
    setBasket(basket.map(item=> item.id === pizza.id ? {...exist, amount: exist.amount + 1} : item ))
}else{
    setBasket([...basket, {...pizza, amount:1}])
}
}

    return (
        <div className={styles.main}>
            {dataMenu.pizza.map((item)=>{
                return(
                    <div className={styles.container} key={item.id}>
                    <img className={styles.img} src={process.env.PUBLIC_URL + `/Imgs/sort_of_pizza/${item.image}`} />
                    <h4 className={styles.name}>{item.name}</h4>
                     <div>
                    <span className={styles.cost}>{item.cost}p</span>
                    <NavLink to='/basket'><button className={styles.button} onClick={()=>addBasket(item)}>buy</button></NavLink>
                    </div>  
                    </div>
                )
            })}
        </div>
    )
}

export default Menu