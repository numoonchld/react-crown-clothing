import React, { Fragment } from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({ title, items }) => {
    return (
        <Fragment>
            <div className='collection-preview'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                    {items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherFields}) => 
                        <CollectionItem key={id} {...otherFields} />
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default PreviewCollection