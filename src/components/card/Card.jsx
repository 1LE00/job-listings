import { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
import './card.css';

const Card = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <section className={`${props.company} company flex flex-column w-100 ${(props.new && props.featured && isLoaded) ? 'has-border' : ''} ${isLoaded ? 'translate' : 'invisible'}`}>
            <section className="job-info w-100 flex">
                <section className="company-logo">
                    <img src={props.logo} alt={`${props.company} logo`} title={`${props.company} logo`} className={isLoaded ? 'translate' : 'invisible'} />
                </section>
                <section className="content flex flex-column">
                    <section className={isLoaded ? "title-box flex translate" : "title-box flex invisible"}>
                        <h3 className='company-name'>{props.company}</h3>
                        {(props.new || props.featured) && <section className="tags flex">
                            {props.new && <h5 className='new uppercase'>New!</h5>}
                            {props.featured && <h5 className='featured uppercase'>Featured</h5>}
                        </section>}
                    </section>
                    <section className={isLoaded ? "position-box translate" : "position-box invisible"}>
                        <h2 className='position'>{props.position}</h2>
                    </section>
                    <section className={isLoaded ? "bottom flex translate" : "bottom flex invisible"}>
                        <section className="posted-at">{props.postedAt}</section>
                        <section className="dot"></section>
                        <section className="contract">{props.contract}</section>
                        <section className="dot"></section>
                        <section className="location">{props.location}</section>
                    </section>
                </section>
            </section>
            <div className="holder"></div>
            <Filter role={props.role} level={props.level} languages={props.languages} tools={props.tools} handleClick={props.click} isLoaded={isLoaded} />
        </section>
    )
}

export default Card