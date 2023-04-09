import React, { useState } from 'react';
import './secondpage.css';
import { useHistory } from 'react-router-dom';

const SecondPage = () => {
    const [texts, setTexts] = useState([
        {
            heading: 'Targetted marketig',
            content:
                "The campaign should highlight MasterStore's high-end products and emphasize the unique experience that customers can have by shopping at their stores The campaign can be promoted on social media platforms like WeChat, Weibo, and Douyin, which are popular in China.",
        },
        {
            heading: 'Collaboration with travel agencies',
            content:
                'To create customized travel packages for Chinese tourists that include a shopping experience at MasterStore. This can help attract more Chinese tourists to the store and increase sales revenue.',
        },
        {
            heading: 'Strategically located stores',
            content:
                'Consider opening new stores in strategic locations in China to capture the growing demand for luxury goods. This can help the company expand its presence in the Chinese market and increase revenue from Chinese consumers.',
        },
        {
            heading: 'Customer experience',
            content:
                'Invest in improving the customer experience at MasterStore by hiring bilingual staff and providing Chinese language signage and product information. This can help create a more welcoming environment for Chinese customers and improve their shopping experience.',
        },
    ]);

    const history = useHistory();

    const handleClick = (index) => {
        const myText = texts[index];
        history.push({
            pathname: '/pages',
            state: {
                heading: myText.heading,
                content: myText.content,
            },
        });
    };

    const handlePrev = () => {
        history.push('/');
    };

    const handleNext = () => {
        history.push('/map');
    };

    return (
        <div className="secondPage">
            <h1>Our Solution</h1>
            <div className="secondpage__buttons">
                <button onClick={handlePrev}>
                    Previous
                </button>
                {texts.map((text, index) => (
                    <button
                        key={text.heading}
                        onClick={() => handleClick(index)}
                    >
                        {text.heading}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SecondPage;
