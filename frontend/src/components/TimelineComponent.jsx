import React from "react";
import { useLocation } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineComponent.css";

const TimelineComponent = ({ timelineData }) => {
    const location = useLocation();

    // Determine the class based on the current URL
    const timelineClass =
        location.pathname === "/cornelia" ? "timeline-cornelia" : "timeline-home";

    return (
        <VerticalTimeline className={timelineClass}>
            {timelineData.map((item, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    date={<span className="timeline-date">{item.date}</span>}
                    iconStyle={{ background: item.iconColor, color: "#fff" }}
                    icon={item.icon}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    {item.subtitle && (
                                <p className="vertical-timeline-element-subtitle">{item.subtitle}</p>
                            )}
                    <p>{item.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default TimelineComponent;
