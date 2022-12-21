import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<div>dashboard</div>} />
          <Route path="sales" element={<div>sales</div>} />
          <Route path="reports" element={<div>reports</div>} />
          <Route path="feedback" element={<div>feedback</div>} />
          <Route path="customers" element={<div>customers</div>} />
        </Route>
      </Routes>
    </>
  );
};
