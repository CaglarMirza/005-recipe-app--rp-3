import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from '../../assets/coding.svg'

const About = () => {
    return (
        <AboutContainer>
            <StyledImage src={codingSvg} />
            <HeaderContainer>
                <h1>About Software Developer <span>Caglar Mirza</span></h1>
            </HeaderContainer>

            <InfoContainer>
                <h2>Hi, I'm Caglar</h2>
                <h3>I'm currently learning Full-Stack Development Languages.</h3>
                <h4>I've already known JS, ReactJS, ReactNative, NodeJS, SQL, Python.</h4>
                <h2>
                    <a href="https://github.com/CaglarMirza" target="_blank" rel="noreferrer" >GITHUB</a>
                </h2>

            </InfoContainer>

        </AboutContainer>
    )
}

export default About
