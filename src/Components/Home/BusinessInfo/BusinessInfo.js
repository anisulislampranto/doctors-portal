import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';



const infosData = [
    {
        icon: faClock,
        title: 'Opening Houres',
        description: 'We are open 7 days',
        background: 'primary'

    },
    {
        icon: faMapMarker,
        title: 'visit Our Location',
        description: 'Broklyn, NY 10000 USA',
        background: 'dark'
    },
    {
        icon: faPhone,
        title: 'Call Us Now',
        description: '+123466767876',
        background: 'primary'
    }

]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row ">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;