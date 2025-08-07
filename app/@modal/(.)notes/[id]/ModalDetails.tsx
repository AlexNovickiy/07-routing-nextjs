'use client';

import css from '@/components/Modal/Modal.module.css';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

type NoteModalDetailsProps = {
  children: React.ReactNode;
};

export default function NoteModalDetails({ children }: NoteModalDetailsProps) {
  const router = useRouter();

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };
  const handleCloseModal = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleEscapeClick = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscapeClick);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
      document.body.style.overflow = 'auto';
    };
  }, [handleCloseModal]);

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {children}
        <button className={css.closeButton} onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
}
