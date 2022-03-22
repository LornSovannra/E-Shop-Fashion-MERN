import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
import { removeFromCart, adjustQty } from '../actions/CartAction';
import { useDispatch } from 'react-redux';

export default function CartItem({ itemData }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState(itemData.qty)

    const onChangeHandler = (e) => {
        setInput(e.target.value)
        dispatch(adjustQty(itemData.id, e.target.value))
    }

    return (
        <Wrapper>
            <div className="shopping_cart_item">
                <div className="cart_item_image">
                    <img src={ itemData.image } alt={ itemData.title } />
                </div>
                <div className="cart_item_detail">
                    <div className="cart_item_title">
                        <h3>{ itemData.title }</h3>
                    </div>
                    <div className="cart_item_qty">
                        <p>Quantity</p>
                        <input type="number" min="1" value={ input } onChange={onChangeHandler} />
                    </div>
                    <div className="cart_item_description">
                        <p>{ itemData.description }</p>
                    </div>
                    <div className="cart_item_price_delete">
                        <p>$ { itemData.price }</p>
                        <DeleteIcon className="delete_icon" onClick={() => dispatch(removeFromCart(itemData.id))} />
                    </div>
                    <div className="cart_item_delete">
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
.shopping_cart_item{
    display: flex;
    margin: 5px 0 0 0;
    border-bottom: 1px solid gray;

    .cart_item_image img{
        width: 250px;
    }
    
    .cart_item_detail{
        margin: 0 0 0 2em;
    
        .cart_item_description{
            width: 100%;
        }
        
        .cart_item_qty{
            display: flex;
            justify-content: right;
    
            p{
                margin: 0 .5em 0 0;
            }
    
            input{
                width: 70px;
                border-radius: 10px;
                text-align: center;
            }
        }
        
        .cart_item_price_delete{
            display: flex;
            justify-content: space-between;
            align-items: center;
    
                .delete_icon{
                    cursor: pointer;
                    font-size: 2em;
    
                    &:hover{
                        color: red;
                    }
                }
        }
    
        .cart_item_delete{
            display: flex;
            justify-content: right;
        }
}

}
`