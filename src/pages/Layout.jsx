import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import SectionFirst from "./SectionFirst";
import Product from "./Product";
import QualityWork from "./QualityWork";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className=" flex flex-col w-full">
            <Navbar/>
            <Header/>
            <SectionFirst/>
            <Product/>
            <QualityWork/>
            <Footer/>
    
        </div>
    )
}

export default Layout;