import React from 'react';
import "../styles/pages/LawItem.css"

// This component present a law and on click enters to see sub-laws
const LawItem = ({ law, language, selectLaw }) => {
    const selectThisLaw = (id) => {
        selectLaw(id)
    }
    

    return (
        <div className={`law-item`}  onClick={() => selectThisLaw(law.id)}>
        
            <div className="law-item-header">
                <div>
                    {law.label[language]}
                </div>
                <div>Law ID: {law.id}</div>
            </div>
            {law.children && law.children.length > 0 && language === 'en' && (
                <div className="sub-law-info">
                    click for related sub laws
                </div>
            )}
            {law.children && law.children.length > 0 &&  language === 'he' &&(
                <div className="sub-law-info">
                    לחץ לתת חוקים בנושא
                </div>
            )
            }
        </div>
    );
};

export default LawItem;
