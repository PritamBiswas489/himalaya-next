'use client'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import style from '@/component/DestinationListingCounter.module.scss';
// Countup
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

function DestinationListingCounter() {
  return (
    <>
        <div class={`${style['counter-wrap']}`}>
            <ul class={`${style['destination-counter']}`}>
                <li>
                    <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <div className={`${style['count-number']}`}>
                                {isVisible ? <h3><CountUp duration={10} end={45} /></h3> : null}
                                <h4>Iconic Destination</h4>
                            </div>
                        )}
                    </ReactVisibilitySensor>
                </li>
                <li>
                    <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <div className={`${style['count-number']}`}>
                                {isVisible ? <h3><CountUp duration={10} end={18} /></h3> : null}
                                <h4>Unique Adventure</h4>
                            </div>
                        )}
                    </ReactVisibilitySensor>
                </li>
                <li>
                    <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <div className={`${style['count-number']}`}>
                                {isVisible ? <h3><CountUp duration={10} end={25} /><FaPlus /></h3> : null}
                                <h4>Travelling Experience</h4>
                            </div>
                        )}
                    </ReactVisibilitySensor>
                </li>
            </ul>
        </div>
    </>
  )
}

export default DestinationListingCounter