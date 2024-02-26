import React, { useState, useEffect } from 'react';
import lawsData from '../data/default.json';
import LawItem from './LawItem';
import "../styles/pages/Laws.css"
import { useStore } from '../custom-hooks/store';

// This component present all the laws and insert them to lawItem
// language selection is triggered here
const Laws = () => {
    const { laws, setLaws, language, setlanguage, fileLaws } = useStore();
    const [lawId, setLawId] = useState('')
    // in bigger project it would be a Lib for texts in supported languages
    const languageTexts = {
        switchLanguageText: {
            he: 'Switch To English',
            en: 'להחליף לעברית'
        },
        backText: {
            he: 'חזור לכל החוקים',
            en: 'Back To All Laws'
        },
        restoreDefault: {
            he: 'חזור לקובץ המקורי',
            en: 'restore default file'
        }
    }

    const findLawById = (id, currLaws) => {
        for (const law of currLaws) {
            if (law.id === id) {
                return law;
            }
            if (law.children) {
                const found = findLawById(id, law.children);
                if (found) return found
            }
        }
        return null;
    };

    const selectLaw = (id) => {
        const law = findLawById(id, laws)
        if(id && law.children) {
            setLawId(law.id)
            setLaws(law.children)
        }
        
    }

    const resetLaws = () => {
        console.log('FILEEEE', fileLaws);
        fileLaws.length ? setLaws(fileLaws) : setLaws(lawsData.laws)
        setLawId('')
    }

    const restoreDefault = () => {
        setLaws(lawsData.laws)
        setLawId('')
    }

    const switchLanguage = () => {
        language === 'he' ? setlanguage('en') : setlanguage('he')
    }

    return (
        <main>
            {lawId !== '' && <button className='button' onClick={() => resetLaws()}>
                {languageTexts.backText[language]}
            </button>}


            {laws.map(law => (
                <LawItem key={law.id} law={law} language={language} selectLaw={selectLaw} />
            ))}
           <button className='button' onClick={() => switchLanguage()}>
                {languageTexts.switchLanguageText[language]}
           </button>
           <button className='button' onClick={() => restoreDefault()}>
                {languageTexts.restoreDefault[language]}
           </button>
           
        </main>
    );
};

export default Laws;
