import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/global';

/* Styled Components */

const Title = styled.h1`
  text-align: center;
  font-size: 54px;
  padding-top: 60px;
`;

const AggregatesContainer = styled.div`
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
  padding-top: 80px;

  li {
    list-style-type: none;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Loading = styled.span`
  font-size: 36px;
`;

/* Dummy Components */

const fakeServerData = {
  user: {
    name: 'Giamma',
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          { name: 'Love On The Brain', duration: 224 },
          { name: 'Fire bomb', duration: 258 },
          { name: 'Kiss It Better', duration: 253 },
        ],
      },
      {
        name: 'Discover Weekly',
        songs: [
          { name: 'U Got It Bad', duration: 268 },
          { name: 'hard rain', duration: 301 },
          { name: 'Fast Slow Disco', duration: 287 },
        ],
      },
      {
        name: 'Dance To This',
        songs: [
          { name: 'In My Feelings', duration: 308 },
          { name: 'Missing U', duration: 291 },
          { name: 'TOOTIMETOOTIMETOOTIME', duration: 299 },
        ],
      },
      {
        name: 'Rock My Soul',
        songs: [
          { name: 'Love It If We Made It', duration: 253 },
          { name: 'One Thing Left To Try', duration: 260 },
          { name: 'Little Dark Age', duration: 300 },
        ],
      },
    ],
  },
};

const PlaylistCounter = ({ playlists }) => (
  <div>
    <h2>
      {playlists.length}
      {' '}
playlists
    </h2>
  </div>
);

const HoursCounter = ({ playlists }) => {
  const allSongs = playlists.reduce((songs, eachPlaylist) => songs.concat(eachPlaylist.songs), []);
  const totalDuration = allSongs.reduce((sum, eachSong) => sum + eachSong.duration, 0);

  return (
    <div>
      <h2>
        {Math.floor(totalDuration / 60)}
        {' '}
minutes
      </h2>
    </div>
  );
};

const Filter = props => (
  <FilterContainer>
    <img src="" alt="" />
    <input type="text" onChange={event => props.onTextChange(event.target.value)} />
  </FilterContainer>
);

const Playlist = ({ playlist }) => (
  <div>
    <img src="" alt="" />
    <h3>{playlist.name}</h3>
    <ul>
      {playlist.songs.map(song => (
        <li>{song.name}</li>
      ))}
    </ul>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }

  render() {
    const playlistToRender = this.state.serverData.user
      ? this.state.serverData.user.playlists.filter(playlist => playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase()))
      : [];
    return (
      <div>
        {this.state.serverData.user ? (
          <div>
            <Title>
              {this.state.serverData.user.name}
              's Playlists
            </Title>
            <AggregatesContainer>
              <PlaylistCounter playlists={playlistToRender} />
              <HoursCounter playlists={playlistToRender} />
            </AggregatesContainer>
            <Filter onTextChange={text => this.setState({ filterString: text })} />
            <PlaylistContainer>
              {playlistToRender.map(playlist => (
                <Playlist playlist={playlist} />
              ))}
            </PlaylistContainer>
          </div>
        ) : (
          <Loading>Loading...</Loading>
        )}
      </div>
    );
  }
}

export default App;
