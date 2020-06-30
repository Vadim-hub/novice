import React from 'react';

function Counter(){
    let styleColor = { /* задать стиль в виде объекта */
     color: 'green'
    }
    return(
      <div className="header">
          <h3 style={styleColor}>Всего задач: </h3> {/* стиль передается в виде объекта */}
          <section id="counter"></section>
          <h3 style={styleColor}>Важных задач: </h3>
          <section id="counterAlert"></section>
          <h3 style={styleColor}>Сделано задач: </h3>
          <section id="counterDone"></section>
      </div>
    )
  }

  export default Counter;