import React from 'react';
/** el ../ = Salta la carpeta en la que estamos y se dirige a la carpeta css a buscar el archivo*/
import '../css/index.css';
import Header from './header.js';
import Jumbotron from './jumbo.js';
import Row from './row.js';
import Footer from './footer.js'

function Main() {
  return (
    <div>
    <Header/ >
      <div className="container">
        <Jumbotron/ >
        <Row/ >
      </div>
      <Footer/ >
    </div>
  );
}
/**this exercise are copied in https://blackrockdigital.github.io/startbootstrap-heroic-features/#
but codeed for Me*/

export default Main;
