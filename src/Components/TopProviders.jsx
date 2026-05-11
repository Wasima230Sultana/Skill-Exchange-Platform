import React, { useEffect, useState } from 'react';
import ProviderData from './ProviderData';

const TopProviders = () => {
    const [provider,setProvider]=useState([]);
    useEffect(()=>{
        fetch('/topProvider.json')
        .then(res=>res.json())
        .then(data=>setProvider(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-8 my-4 bg-gray-600 p-4 rounded-sm'>
            {
                provider.map(provider=>
                <ProviderData key={provider.skillId} provider={provider}></ProviderData>)
            }
        </div>
    );
};

export default TopProviders;