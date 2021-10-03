import React from 'react';
import './App.css';
import Header from './components/Header';
import BothContained from './components/BothContained';
import NewsNotification from './components/NewsNotification';




function App() {
  document.body.style = 'background:#fffff0 ;';

//...API Call and response
//as a result the data would be available 

  const NewsNotificationData = [
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Tutkija kertoo: Näin sota näkyy meissä edelleen'
    
    },
    {
      topic: 'PÄIVÄN TIMANTTI',
      body: 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'
    },
    {
      topic: 'MAINOS',
      body: 'Faktoille nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!'
    }
  ];




  return (
    <div>
     <Header/>
    {
      NewsNotificationData.map(element => <NewsNotification topic ={element.topic} body={element.body}/>)
    }
    
    <BothContained />
    </div>
  );
}

export default App;



//alkuperäinen notaatio Headerin alle, manuaalinen inputtaus
//<NewsNotification topic={'PÄIVÄN TIMANTTI'} body={'Tutkija kertoo: Näin sota näkyy meissä edelleen'}/>
//<NewsNotification topic={'PÄIVÄN TIMANTTI'} body={'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'}/>
//<NewsNotification topic={'MAINOS'} body={'Faktoille nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!'}/>