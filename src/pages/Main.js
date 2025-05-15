import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { TitlePage } from "./TitlePage";
import { ResultPage } from "./ResultPage";

export function Main() {
  return (
    <>
      <div>
        <Routes> {/* Routes chooses the first matching Route to render based on the URL */}
          <Route path='/titlepage' element={<TitlePage />} />
          <Route path='/resultpage' element={<ResultPage />} />
        </Routes>
      </div>
    </>
  );
}