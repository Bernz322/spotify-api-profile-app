import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

import { Login, Profile, TopArtists, TopTracks, Playlists, Playlist, Artist, Track, Album, Main } from './pages';
import { accessToken } from "./spotify"
import { GlobalStyles } from "./styles"
import { Navbar } from "./components";

/**
 * Ensures that everytime we switch to another route, we will always be on the top page
 * https://v5.reactrouter.com/web/guides/scroll-restoration
 * https://stackoverflow.com/questions/70193712/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6
 * @returns {void}
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken)
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        {!token ? (
          <Main />
        ) : (
          <>
            <Navbar token={token}/>
            <ScrollToTop />
            <Routes>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/artists/:id" element={<Artist />} />
              <Route path="/albums_singles/:id" element={<Album />} />
              <Route path="/top-tracks" element={<TopTracks />} />
              <Route path="/playlists/:id" element={<Playlist />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/tracks/:id" element={<Track />} />
              <Route path="/" element={<Profile />} />
            </Routes></>
        )}
      </header>
    </div>
  );
}

export default App;