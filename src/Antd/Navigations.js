import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Affix, Button } from 'antd';
import './Navigations.css'
export default function Navigations(){ 
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    const [container, setContainer] = useState(null);
    return(
        <div>
            <h1>Affix Usages</h1>
            <Affix offsetTop={top}>
            <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
            </Button>
                </Affix>
                <br />
                <Affix offsetBottom={bottom}>
                    <Button type="primary" onClick={() => setBottom(bottom + 10)}>
                    Affix bottom
                    </Button>
                </Affix>
                <hr></hr>
                <h1>Top of container</h1>
                <div className="scrollable-container" ref={setContainer}>
            <div className="background">
                <Affix target={() => container}>
                <Button type="primary">Fixed at the top of container</Button>
                </Affix>
            </div>
            </div>
            <hr></hr>
        <h1>Callback with affixed state</h1>
        <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
        <Button>120px to affix top</Button>
        </Affix>
        </div>
        
    )
}