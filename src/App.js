import React from 'react';

const Aggregate = () => (
  <div>
    <h2>Number Text</h2>
  </div>
);

const Filter = () => (
  <div>
    <img src="" alt="" />
    <input type="" />
    Filter
  </div>
);

const Playlist = () => (
  <div>
    <img src="" alt="" />
    <h3>Playlist Name</h3>
    <ul>
      <li>Song 1</li>
      <li>Song 2</li>
      <li>Song 3</li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <h1>Better Playlists</h1>
    <Aggregate />
    <Aggregate />
    <Filter />
    <Playlist />
    <Playlist />
    <Playlist />
    <Playlist />
  </div>
);

export default App;
