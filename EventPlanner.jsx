import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
                 <p>
                    Plan and organize your events effortlessly with our comprehensive
                    event planning application. Whether you're hosting a small gathering or a large conference, 
                    our tools and features are designed to help you manage every aspect of your event with ease.
                </p>
                <button className='get-started-button'>
                    Get Started
                </button>
            </header>
            <section className='Description'>
                {/*Description of the Event Planner application*/}
               
            </section>
               {/*section to list or categorize different types of event */}
            <section className ="events categories"> 
                <div className='event-box'>
                    <h2 className='event-title'> Social Events: </h2>
                </div>
                 {/*events categories goes here*/}
                 <ul>
                  <li>Weddings receptions</li>
                  <li>Birthday Parties</li>
                  <li>Anniversary Celebrations</li>
                  <li>Baby Showers</li>
                  <li>Family Reunions</li>
                  <li>Graduation Parties</li>
                  <li>Social Events</li>
                 </ul>
                 
                 <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Festivals</li>
                    <li>Screanings</li>
                    <li>Shows</li>
                    <li>Exhibitions</li>
                    <li>Events</li>
                 </ul>
                 <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraisers</li>
                    <li>Charity Events</li>
                    <li>Volunteer Drives</li>
                    <li>Neighborhood block party</li>
                    <li>Community festivals</li>
                    <li>Cultural Celebrations</li>

                 </ul>
                </div>
            </section>   
             {/*ssection to highlight app features or functionalities*/}
             <section className ="features"> 
                 {/*feature contents goes here*/}
                 <h2>Features</h2>
                 <ul>
                    <li>Easy event creation management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real time Collaborations</li>
                    <li>Reminders and notifications</li>

                 </ul>
            </section>    
                {/*section to showcase user reviews or testimonials*/}
             <section className ="testimonials"> 
                 {/*testimonials content goes here*/}
                 <div className='Testimonial'>
                    <p>Event planner made organizing my wedding and breeze. Highly recommended! </p>
                    <p className='author'>-Emily Johnson </p>
                 </div>
                 <div className='Testimonial'>
                    <p>I use Event planner for all my corporate events. It saves me so much time and effort!</p>
                    <p className='author'> -John Smith</p>
                 </div>
            </section>
        
    );
};

export default EventPlanner;
