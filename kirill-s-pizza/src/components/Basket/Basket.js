import {BasketContext} from '../../context'
import React, {useContext, useState} from 'react'
import styles from './Basket.module.css'
import PopupOrder from './PopupOrder';
import { NavLink } from 'react-router-dom'
function Basket() {

    const{basket, setBasket} = useContext(BasketContext)
    const [popupOrder, setPopupOrder] = useState(false);
    const[nameOrder, setNameOrder] = useState('')
    const[phoneOrder, setPhoneOrder] = useState('')

  const submitHandle=(e)=>{
    e.preventDefault();
    setPopupOrder(true)
  }

  function addBasket(pizza){
    const exist = basket.find((item)=>item.id === pizza.id)
    if (exist){
        setBasket(basket.map(item=> item.id === pizza.id ? {...exist, amount: exist.amount + 1} : item ))
    }else{
        setBasket([...basket, {...pizza, amount:1}])
    }}
    function removeBasket(pizza){
        const exist = basket.find((item)=>item.id === pizza.id)
        if (exist.amount === 1){
            setBasket(basket.filter(item=>item.id !==pizza.id))
        }else{
            setBasket(basket.map(item=> item.id === pizza.id ? {...exist, amount: exist.amount - 1} : item ))
        }}


    function deleteBasket (pizza){
        const exist = basket.find((item)=>item.id === pizza.id)
        if (exist){
            setBasket(basket.filter(item=>item.id !==pizza.id))
    }}

    const totalPrice = basket.reduce((accumulator, currentValue) => accumulator + currentValue.amount * currentValue.cost, 0);
    const totalAmount = basket.reduce((accumulator, currentValue) => accumulator += currentValue.amount, 0);

    return (
     <div className={styles.basket}>
 <h3 className={styles.title}>Basket</h3>
 <div className={styles.basketHeader}>
                Order. Total quantity: {totalAmount}
                    </div>  
                    <NavLink to='/menu' className={styles.addPizzas}>add other pizzas</NavLink>   
            <div>{basket.map((item)=>{
                return(
                 <div className={styles.goods} key={item.id}>
                <div className={styles.flex}>
                <img className={styles.img} src={process.env.PUBLIC_URL + `/Imgs/sort_of_pizza/${item.image}`} />
                <h4 className={styles.name}>{item.name}</h4>
                </div>
            <div className={styles.flex}>
            <span className={styles.cost}>{item.cost*item.amount} p</span>
            <div className={styles.buttons}>
            <button className={styles.button_minus} onClick={()=>removeBasket(item)}></button>
            <span className={styles.amount}> {item.amount} </span>
            <button className={styles.button_plus} onClick={()=>addBasket(item)}></button>
            </div>
            <button className={styles.button_delete} onClick={()=>deleteBasket(item)}></button>
            </div></div>
)
}
)}      </div>
                <div className={styles.total}>TOTAL: {totalPrice} p</div>

        <form id="contact-form" onSubmit={submitHandle} className={styles.formArea}>
          <label className={styles.label}>Name</label>
          <input name="name" placeholder="Enter full name..." type="text" 
          className={styles.input} onChange={(e)=>setNameOrder(e.target.value)}
          required minLength={2} maxLength={40} value={nameOrder}/>
          <label className={styles.label}>Phone</label>
          <input name="Phone" placeholder="Enter phone..." type="number" 
          className={styles.input} onChange={(e)=>setPhoneOrder(e.target.value)}
          required minLength={10} maxLength={13} value={phoneOrder}/>
          <button type="submit" className={styles.button}>MAKE AN ORDER</button>
        </form>

<PopupOrder popupOrder={popupOrder} setPopupOrder={setPopupOrder}
nameOrder={nameOrder} phoneOrder={phoneOrder} totalPrice={totalPrice}
setNameOrder={setNameOrder} setPhoneOrder={setPhoneOrder}
setBasket={setBasket}/>
</div>
    )
}

export default Basket
