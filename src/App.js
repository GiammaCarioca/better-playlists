import React from 'react';
import styled from 'styled-components';
import './styles/global';

/* Styled Components */

const Title = styled.h1`
  text-align: center;
  font-size: 54px;
  padding-top: 60px;
`;

const AggregateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 60px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;

  input {
    width: 200px;
  }
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 40px;

  li {
    list-style-type: none;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

/* Dummy Components */

const Aggregate = () => (
  <div>
    <h2>Number Text</h2>
  </div>
);

const Filter = () => (
  <FilterContainer>
    <img src="" alt="" />
    <input type="" />
  </FilterContainer>
);

const Playlist = () => (
  <PlaylistContainer>
    <div>
      <img src="" alt="" />
      <h3>Playlist Name</h3>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
      </ul>
    </div>
  </PlaylistContainer>
);

const App = () => (
  <div>
    <Title>Better Playlists</Title>
    <AggregateContainer>
      <Aggregate />
      <Aggregate />
    </AggregateContainer>
    <Filter />
    <PlaylistContainer>
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
    </PlaylistContainer>
  </div>
);

export default App;
