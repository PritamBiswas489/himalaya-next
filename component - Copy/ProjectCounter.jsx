'use client'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import style from '@/component/ProjectCounter.module.scss';
// Countup
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

function ProjectCounter(props) {
    
  return (
    <>
        <div className={`${style['counter-wrap']}`}>
            <ul className={`${style['destination-counter']}`}>
                <li>
                    <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <div className={`${style['count-number']}`}>
                                {isVisible ? <h3><CountUp duration={10} end={props.countdown.iconicDestination !== null?parseInt(props.countdown.iconicDestination):0} /></h3> : null}
                                <h4>Iconic Destination</h4>
                            </div>
                        )}
                    </ReactVisibilitySensor>
                </li>
                <li>
                    <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <div className={`${style['count-number']}`}>
                                {isVisible ? <h3><CountUp duration={10} end={props.countdown.uniqueAdventure !== null?parseInt(props.countdown.uniqueAdventure):0} /></h3> : null}
                                <h4>Unique Adventure</h4>
                            </div>
                        )}
                    </ReactVisibilitySensor>
                </li>
                <li>
                    <ReactVisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <div className={`${style['count-number']}`}>
                                {isVisible ? <h3><CountUp duration={10} end={props.countdown.travellingExperience !== null?parseInt(props.countdown.travellingExperience) :0} /><FaPlus /></h3> : null}
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

export default ProjectCounter