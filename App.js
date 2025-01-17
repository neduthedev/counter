import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header';
import Counter from './component/counter';
import './counter.css';

function App(){

    return(
        <>
        <div className='main'> 
        <Header />
        <Counter />
        </div>
        </>
    )
}
export default App;
