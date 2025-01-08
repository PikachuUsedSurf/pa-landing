'use client'

import { useState, useEffect } from 'react';
import { ref, onValue, increment, set } from 'firebase/database';
import { database } from '../../lib/firebase';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const visitorCountRef = ref(database, 'visitorCount');

    // Increment the visitor count
    set(visitorCountRef, increment(1));

    // Listen for changes to the visitor count
    const unsubscribe = onValue(visitorCountRef, (snapshot) => {
      const count = snapshot.val();
      setVisitorCount(count);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
      Visitors: {visitorCount}
    </div>
  );
};

export default VisitorCounter;

