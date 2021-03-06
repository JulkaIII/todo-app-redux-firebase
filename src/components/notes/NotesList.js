import React from "react";
import NoteSummary from "./NoteSummary";
import { Link } from "react-router-dom";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list section">
      {notes &&
        notes.map(note => {
          return (
            <Link to={`/note/${note.id}`} key={note.id}>
              <NoteSummary note={note} key={note.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default NoteList;
