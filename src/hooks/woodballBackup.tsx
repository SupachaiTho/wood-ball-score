import { useAppSelector } from '@/app/hooks';
import { useEffect } from 'react';

export function woodBallBackup() {
  const currentWoodBallData = useAppSelector((state) => state.woodBall);
  useEffect(() => {
    if (currentWoodBallData) {
      localStorage.setItem('woodBall', JSON.stringify(currentWoodBallData));
    }
  }, [currentWoodBallData]);
}
