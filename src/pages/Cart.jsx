import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cartitem } from '../components/Cartitem'
import {useSelector} from 'react-redux';

export const Cart = () => {
    const {cart} = useSelector((state) => state);         //array of items in cart
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        //accumulator, current value & 0 - initial value
        setTotalAmount( cart.reduce( (acc, curr) => acc+curr.price, 0));
    },[cart])   //addition/removal in cart pe total change hoga


  return (
    <div>
        {
            cart.length > 0 ?
            (
                <div>
                    <div>
                        {
                            cart.map( (item,index) => {
                                return <Cartitem key={item.id} item={item} itemIndex={index}/>
                            })
                        }
                    </div>

                    <div>
                        <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>

                        <div>
                            <p>Total Amount: ${totalAmount}</p>
                            <button>Checkout Now</button>
                        </div>
                    </div>
                </div>
            ):
            (
                <div>
                    <h1>Your cart is empty!</h1>
                    <Link to={"/"}>
                        <button>Shop Now</button>
                    </Link>
                    
                </div>
            )
        }
    
    </div>
  )
}
