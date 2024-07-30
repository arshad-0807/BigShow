

const Genre = ({genre}) =>{
    return(
      <div className='genre'>
            {genre.map((g, index) => (
              <a href="#" key={index}>{g}</a>
            ))}
      </div>
    );
  }

  export default Genre;