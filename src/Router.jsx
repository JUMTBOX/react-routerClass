import React from 'react';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/profile" element={<ProfileComponent />} />
      <Route path="/board" element={<BoardComponent />} />
      <Route path="/board/:boardID" element={<BoardDetail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
