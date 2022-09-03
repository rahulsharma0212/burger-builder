import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../Ui/Button/Button';
const OrderSummary = (props) => {
    const ingredientSummary=Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey} style={{textTransform: 'capitalize'}}><span>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to check out</p>
            <Button btntype="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btntype="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxillary>
    )

}

export default OrderSummary;