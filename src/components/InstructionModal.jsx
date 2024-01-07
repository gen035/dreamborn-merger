import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { track } from "@vercel/analytics";

const InstructionModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setModalOpen] = useState(false || isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
    track("modal", { action: "opened" });
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    track("modal", { action: "closed" });
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay fixed top-0 left-0 w-screen h-screen bg-black/[.75] z-50 p-2">
          <div className="modal bg-black p-8 max-w-96 relative inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md text-white text-center">
            <h2 className="text-xl mb-2">Instructions 💫</h2>
            <ol className="list-decimal text-left pl-4 text-sm">
              <li className="mb-1">Copy Lorcana deck from Dreamborn</li>
              <li className="mb-1">Paste into one of the fields</li>
              <li className="mb-1">Click the Merge Decks button to combine the decks into a single file</li>
              <li className="mb-1">Copy merged deck to clipboard</li>
            </ol>
            <button className="button--animated mt-4" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

InstructionModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default InstructionModal;
