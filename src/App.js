import { Routes, Route } from 'react-router-dom';
import Laws from './pages/Laws';
import SideMenu from './pages/SideMenu';
import FileUploader from './pages/FileUploader';
import { StoreProvider } from './custom-hooks/store';


function App() {
  return (
    <>
      <SideMenu/>
      <StoreProvider>
      <Routes>
        <Route path="/" element={<Laws />} />
        <Route path="/FileUploader" element={<FileUploader />} />
      </Routes>
      </StoreProvider>
    </>
  )
}
export default App;
