import Title from './components/Title';
import FirstRequest from './examples/1-first-request'
import HeaderRequest from './examples/2-headers.js'
import PostRequest from './examples/3-post-request.js'
import GlobalDefaults from './examples/4-global-instance'
import CustomInstance from './examples/5-custom-instance'
import Interceptors from './examples/6-interceptors'
function App() {
  return (
    <main>
      <Title />
      {/* <FirstRequest/> */}
{/* <HeaderRequest/> */}
{/* <PostRequest/> */}
{/* <GlobalDefaults/> */}
{/* <CustomInstance/> */}
<Interceptors/>

    </main>
  );
}

export default App;
