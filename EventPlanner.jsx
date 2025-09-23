import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            
            <section className='Description'>
                {/*Description of the Event Planner application*/}
                <p>
                    Plan and organize your events effortlessly with our comprehensive
                    event planning application. Whether you're hosting a small gathering or a large conference, 
                    our tools and features are designed to help you manage every aspect of your event with ease.
                </p>
                <button className='get-started-button'>
                    Get Started
                </button>
            </section>
               {/*section to list or categorize different types of event */}
            <section className ="events categories"> 
                 {/*events categories goes here*/}
                 <ul>
                  <h2>Social Events:</h2>  
                  <li>Weddings receptions</li>
                  <li>Birthday Parties</li>
                  <li>Anniversary Celebrations</li>
                  <li>Baby Showers</li>
                  <li>Family Reunions</li>
                  <li>Graduation Parties</li>
                  <li>Family Reunions</li>
                 </ul>
                 
                 <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Festivals</li>
                    <li>Screanings</li>
                    <li>Comedy Shows</li>
                    <li>Art Exhibitions</li>
                    <li>Cultural Events</li>
                 </ul>
                 <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity Events</li>
                    <li>Volunteer Drives</li>
                    <li>Neighborhood block party</li>
                    <li>Community festivals</li>
                    <li>Cultural Celebrations</li>
                 </ul>
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
             {/* Section to provide contact information or a contact form */}
        <section className="contact">
            {/* Section heading */}
            <h2>Contact Us</h2>
            {/* Contact form */}
            <form>
                {/* Name input field */}
                <input type="text" placeholder="Name" />
                {/* Email input field */}
                <input type="email" placeholder="Email" />
                {/* Message textarea */}
                <textarea placeholder="Message"></textarea>
                {/* Submit button */}
                <button className="submit-button">Send</button>
            </form>
        </section>
        </div>        
    );
};

export default EventPlanner;

