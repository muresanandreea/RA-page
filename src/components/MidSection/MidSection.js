import React from 'react';
import {MidSectionWrapper,DesignSection,DesignImage,SectionText,
    DevSection,DevImage,DevText} from './MidSection.style';

export const MidSection = () => {

    return (
        <MidSectionWrapper>
            <DesignSection>
                <DesignImage/>
                <div>
                    <SectionText>
                        <h3>Design</h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </SectionText>
                </div>
            </DesignSection>
            <DevSection>
                <DevImage/>
                <div>

                    <SectionText>
                        <h3>Development</h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </SectionText>
                </div>
            </DevSection>

        </MidSectionWrapper>
    );
}