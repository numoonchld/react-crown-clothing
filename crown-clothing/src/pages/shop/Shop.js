import React, { Component, Fragment } from 'react'
import SHOP_DATA from './ShopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

export class Shop extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            collections: SHOP_DATA
        }
    }
    

    render() {
        const {collections} = this.state

        return (
            <Fragment>

                <div className="shop-page">
                
                {collections.map( ({id, ...otherCollectionProps}) => <PreviewCollection key={id} {...otherCollectionProps} />)}

                </div>

            </Fragment>
        )
    }
}

export default Shop
