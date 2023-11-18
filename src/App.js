import Title from './components/Title';
import FirstRequest from './examples/1-first-request'
import HeaderRequest from './examples/2-headers.js'
import PostRequest from './examples/3-post-request.js'
import './axios-global-defaults/axios-global-defaults'
import GlobalDefaults from './examples/4-global-instance'
function App() {
  return (
    <main>
      <Title />
      {/* <FirstRequest/> */}
{/* <HeaderRequest/> */}
{/* <PostRequest/> */}
<GlobalDefaults/>

    </main>
  );
}

export default App;
