import React from "react";

const Timeline = () => {
    const items = [
        {
            title: "Introduction to Programming",
            date: "Fall 2021",
            description: "Learned the basics of programming with Python and problem-solving.",
        },
        {
            title: "Web Development",
            date: "Spring 2022",
            description: "Built full-stack applications using React and Node.js.",
        },
        {
            title: "Bachelor Thesis",
            date: "Fall 2023",
            description: "Worked on a project to build an AI-powered recommendation system.",
        },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {items.map((item, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <h2 className="title">{item.title}</h2>
                    <p className="date">{item.date}</p>
                    <p className="description">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
