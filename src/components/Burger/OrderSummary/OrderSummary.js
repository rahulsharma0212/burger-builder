import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../Ui/Button/Button';

class OrderSummary extends React.Component {
    componentWillUpdate(){
        console.log('[order summary updated]')
    }
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients).map(igKey=>{
        return <li key={igKey} style={{textTransform: 'capitalize'}}><span>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    });
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to check out</p>
            <Button btntype="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btntype="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Auxillary>
    )
    }
}


export default OrderSummary;