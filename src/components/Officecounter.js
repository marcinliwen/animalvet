import React from "react"
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

const years = 10;
const operations = 390;
const clients = 9210;

const Officecounter = () => (
        <InView triggerOnce delay={300}>
            {({ inView, ref, entry }) => (
            <div className="office-counter" ref={ref}>
                <div className="counter-element">
                    <div className="counter-num"><CountUp start={inView? 0 : years} end={years} duration={3}/></div>
                    <div className="counter-title">lat doświadczenia</div>
                </div>   
                <div className="counter-element">
                    <div className="counter-num"><CountUp start={inView? 0 : operations} end={operations} duration={3}/></div>
                    <div className="counter-title">udanych operacji</div>
                </div>
                <div className="counter-element">
                    <div className="counter-num"><CountUp start={inView? 0 : clients} end={clients} duration={3}/></div>
                    <div className="counter-title">Zadowolonych klientów</div>
                </div>   
            </div>
            )}
        </InView>
    )

export default Officecounter