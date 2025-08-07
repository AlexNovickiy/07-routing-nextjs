import { fetchNoteById } from '@/lib/api';
import NoteModalDetails from './ModalDetails';
import css from '@/components/Modal/Modal.module.css';

type NoteDetailsModalProps = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetailsModal({
  params,
}: NoteDetailsModalProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <NoteModalDetails>
      <>
        <h2 className={css.title}>Note Details</h2>
        <p className={css.content}>ID: {note.id}</p>
        <p className={css.content}>Title: {note.title}</p>
        <p className={css.content}>Content: {note.content}</p>
        <p className={css.content}>Tag: {note.tag}</p>
        {note.createdAt ? (
          <p className={css.content}>
            Created At: {new Date(note.createdAt).toLocaleString()}
          </p>
        ) : (
          <p className={css.content}>
            Updated At: {new Date(note.updatedAt).toLocaleString()}
          </p>
        )}
      </>
    </NoteModalDetails>
  );
}
