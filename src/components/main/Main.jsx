import './main.css';
import Card from '../card/Card';
import Data from '../../data/data.json';
import { useState } from 'react';
import { ReactComponent as Remove } from '../../assets/icons/icon-remove.svg'

const Main = () => {
  const [content, setContent] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    setClicked(true);
    const item = event.target.textContent;
    if (!content.includes(item)) {
      setContent(prevContent => [...prevContent, item]);
      window.scrollTo(0, 0);
    }
  }

  const handleRemove = (event) => {
    const value = event.target.getAttribute('data-value');
    const filteredArray = content.filter(item => item !== value);
    if (filteredArray.length !== 0) {
      setContent([...filteredArray]);
    } else {
      setClicked(false);
      setContent([]);
    }
  }

  const filterCards = () => {
    const filteredData = Data.filter(card => {
      // create a set of properties to match against the filter
      const dataset = [
        card.role,
        card.level,
        ...card.languages,
        ...card.tools
      ];
      // returns the card that matches every filter applied 
      return content.every((filter) => dataset.includes(filter));
    });
    return filteredData; //returns an array Of filteredData
  };


  return (
    <main id='main' className={clicked ? 'hide flex flex-column' : 'flex flex-column'} >
      {content && <section className={clicked ? "search flex visible" : "search flex invisible"}>
        <section className="contents flex">
          {content && content.map((item, index) =>
            <section className='content-item flex' key={index}>
              <section className='item'>{item}</section>
              <section className="remove" onClick={handleRemove} data-value={item}><Remove /></section>
            </section>
          )}
        </section>
        <section className="clear" onClick={() => { setClicked(false); setContent([]) }}>Clear</section>
      </section>}
      {/* create card component based on filteredData */}
      {filterCards().map(data =>
        <Card key={data.id}
          company={data.company}
          logo={data.logo}
          new={data.new}
          featured={data.featured}
          position={data.position}
          role={data.role}
          level={data.level}
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
          languages={data.languages}
          tools={data.tools}
          click={handleClick}
        />
      )}
    </main>
  )
}

export default Main