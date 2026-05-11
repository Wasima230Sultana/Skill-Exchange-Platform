import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Loading from './Loading';

const SkillDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(id,data);
    const [skillDetails,setSkillDetails]=useState({});
    useEffect(()=>{
        const details = data.find(skill=>skill.skillId == id);
        setSkillDetails(details);
    },[id,data])

     if (!skillDetails) {
    return (
      <div className="text-center mt-10 text-xl">
        <Loading></Loading>
      </div>
    );
}
    return (
        <div>
            
        </div>
    );
};

export default SkillDetails;