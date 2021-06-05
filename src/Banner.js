import React, { useState, useHistory } from 'react'
import './Banner.css'
import Button from '@material-ui/core/Button'
import Search from './Search'

function Banner() {
    const history = useHistory()
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <Search />}
                <Button variant='outlined' className='banner__searchButton' onClick={() => setShowSearch(!showSearch)}>
                    {!showSearch ? 'Search Dates' : 'Hide'}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getway to uncover the hidden gems near you.</h5>
                <Button variant='outlined' onClick={() => history.push('/search')}>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
