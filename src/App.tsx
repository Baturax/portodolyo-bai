import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="App">

      <header className='iletisimfln'>

        <h1 className='tabboslugu'>benim seyler</h1>

        <a href='https://github.com/baturax' className='tabboslugu'><h2>github hesabım</h2></a>
        <a href='https://instagram.com/batuhaaaaaaaaaaaaaaaan' className='tabboslugu'><h2>insta hesabım</h2></a>
        <a href='https://github.com/Baturax/portodolyo-bai' className='tabboslugu'><h2>git reposu</h2></a>

      </header>

      <header className='resimyeri'>

        <img src={require('./img/ana.png')}
        className='portofolyoresim'/>

        <h2>öyle kafama göre takılıyorum \n arch linux kullaniom</h2>

        </header>

        <header className="yaziyeri">
        <h3 className='ilkmetin'>ben batuhan</h3>
        <h3 className='ilkmetin'>müzik dinlerim</h3>
        <h3 className='ilkmetin'>pazardansonra pazartesiyi severim</h3>

      </header>
    </div>
  );
}

export default App;
