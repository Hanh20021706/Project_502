import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import NavAdmin from '../../components/NavAdmin'

const AdminLayout = () => {
    return (
        <div>
          <header>
              <HeaderAdmin/>
          </header>
          <NavAdmin/>
          <main style={{border : '1px solid red'}}>
                <Outlet/>
          </main>
        </div>
    )
}

export default AdminLayout
