import React from 'react';

import { useEffect } from 'react';
import {  useHistory,useLocation } from 'react-router-dom';

export default function ScrollToTop(props) {
  const { pathname } = useLocation();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}