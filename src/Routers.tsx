import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Search from './pages/Search';
import Category from './pages/Category';

import { useRecoilState } from 'recoil';
import { isModalOpenState } from './recoils/Contents/Atoms';
import RecentContentModal from './components/common/Modal/RecontContentModal';
import Modal from './components/common/Modal/Modal';
import { isStartModalState } from './recoils/Start/Atoms';
import Login from './components/Start/Login';
import MyStore from './pages/MyStore';

export default function Routers() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [isStartModalOpen, setIsStartModalOpen] =
    useRecoilState(isStartModalState);

  return (
    <div>
      {isModalOpen ? (
        <Modal
          onClose={() => setIsModalOpen(false)}
          content={<RecentContentModal onClose={() => setIsModalOpen(false)} />}
        />
      ) : null}
      {isStartModalOpen ? (
        <Modal onClose={() => setIsStartModalOpen(false)} content={<Login />} />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myStore" element={<MyStore />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
