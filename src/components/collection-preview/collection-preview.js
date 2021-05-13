import React from 'react';
import './collection-preview.scss';
import CollectioItem from '../collection-item/collection-item';

const CollectioPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherCollectionsProps}) => (
                   <CollectioItem key={id} {...otherCollectionsProps}/>
                ))
            }
        </div>
    </div>
)
export default CollectioPreview;