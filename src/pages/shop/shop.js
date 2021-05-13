import React from 'react';
import SHOP_DATA from './shop-data';
import CollectioPreview from '../../components/collection-preview/collection-preview';

class Shop extends React.Component {
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectioPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;