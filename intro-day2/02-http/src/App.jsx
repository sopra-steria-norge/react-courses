import React from 'react';

const byUrls = {
  oslo: "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json",
  trondheim: "https://gbfs.urbansharing.com/trondheimbysykkel.no/station_information.json",
  bergen: "https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json"
}

// Utføre et HTTP kall mot bysykkel API

const App = () => {

  return <div className="App">
    <h1>Bysykkeldata</h1>
  </div>
}

export default App;
