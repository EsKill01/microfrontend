import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

export default () => {

    const ref = useRef(null);

    useEffect(() =>{

        try {
            
        mount(ref.current);
        } catch (error) {
            console.log('error en marketing app container '+error);
        }

    });

    

    return <div ref={ref} />

};
