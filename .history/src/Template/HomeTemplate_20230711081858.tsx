import React from 'react'
import Header from '../Layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Layout/Footer'

type Props = {}

const HomeTemplate = (props: Props) => {
    return (
        <div >
            <div style={{ minHeight: '80vh' }}>
                <Header></Header>
            </div>
            <div className="content" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default HomeTemplate