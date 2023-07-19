import './filter.css';

const Filter = ({ role, level, languages, tools, handleClick, isLoaded }) => {
  return (
    <section className="filters-list flex w-100">
      <section className={isLoaded ? 'translate role' : 'role invisible'} onClick={handleClick}>{role}</section>
      <section className={isLoaded ? 'translate level' : 'level invisible'} onClick={handleClick}>{level}</section>
      {languages && languages.map((language, index) => <section className={isLoaded ? 'translate languages' : 'languages invisible'} onClick={handleClick} key={index}>{language}</section>)}
      {tools && tools.map((tool, index) => <section className={isLoaded ? 'translate tools' : 'tools invisible'} onClick={handleClick} key={index}>{tool}</section>)}
    </section>
  )
}

export default Filter