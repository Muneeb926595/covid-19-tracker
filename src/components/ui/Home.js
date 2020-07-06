import React from 'react';
import GlobalCases from './GlobalCases'
import AllCountries from './AllCountries';
import Graphs from './Graphs';
export default function Home({currentScreen}) {
    if(currentScreen===0){
        return <GlobalCases/>
    }
    else if (currentScreen===1){
        return <AllCountries/>
    }
    else if(currentScreen===2){
        return <Graphs/>
    }
}