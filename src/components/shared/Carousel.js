import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Carousel({ src }){
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            bullets={false}
            infinite={true}
            cssModule={AwesomeSliderStyles}
        >
        {src.map( (data) => (
            <div data-src={data.img} key={data.title} />
        ))}
        </AutoplaySlider>
    );
}