import React from 'react'
import HeaderClient from '../../components/HeaderClient'
import { Outlet } from 'react-router-dom'
import FooterClient from '../../components/FooterClient'
import Banner from '../../components/Banner'

const WebstieLayout = () => {
    return (
        <div>
           <header>
               <HeaderClient/>
           </header>
           <Banner/>
           <main style={{border : '1px solid red'}}>
                <Outlet/>
           </main>
           <footer>
               <FooterClient/>
           </footer>
        </div>
    )
}

export default WebstieLayout
