import React from 'react';
import EventCard from './EventCard';


const EventList = (props) => {    
    const events = props.events.map((event) => {
        return <EventCard key = {event.id} event={event}
        />
   });
    return <div className="display-list">
    {events}
    </div>;
};





export default EventList;