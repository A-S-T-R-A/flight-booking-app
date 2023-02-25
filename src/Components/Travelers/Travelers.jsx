import React, { useEffect } from "react"

import paris from "../../assets/paris.jpg"
import newyork from "../../assets/newyork.jpg"
import london from "../../assets/london.jpg"
import dubai from "../../assets/dubai.jpg"

import traveler1 from "../../assets/tp1.jpg"
import traveler2 from "../../assets/tp2.jpg"
import traveler3 from "../../assets/tp3.jpg"
import traveler4 from "../../assets/tp4.jpg"

import Aos from "aos"
import "aos/dist/aos.css"

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: "Marina",
        socialLink: "@paris",
    },
    {
        id: 2,
        destinationImage: newyork,
        travelerImage: traveler2,
        travelerName: "Rina",
        socialLink: "@NewYork",
    },
    {
        id: 3,
        destinationImage: london,
        travelerImage: traveler3,
        travelerName: "Vadim",
        socialLink: "@london",
    },
    {
        id: 3,
        destinationImage: dubai,
        travelerImage: traveler4,
        travelerName: "Arthur",
        socialLink: "@dubai",
    },
]

function Travelers() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500">
                    Top travelers of this month!
                </h2>
                <div className="travelersContainer grid">
                    {travelers.map(
                        ({
                            id,
                            destinationImage,
                            travelerImage,
                            travelerName,
                            socialLink,
                        }) => {
                            return (
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="2500"
                                    key={id}
                                    className="singleTraveler"
                                >
                                    <img
                                        src={destinationImage}
                                        className="destinationImage"
                                    />
                                    <div className="travelerDetailes">
                                        <div className="travelerPicture">
                                            <img
                                                src={travelerImage}
                                                className="travelerImage"
                                            />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Travelers
