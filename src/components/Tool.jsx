import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import { formatList, formatArrayToString, mergeLists, validateArrays } from '../utils/formatData';
import InstructionModal from './InstructionModal';

const Tool = () => {
  const [listCount, setListCount] = useState(2);
  const [listContents, setListContents] = useState(Array.from({ length: listCount }, () => ''));
  const [formattedListsContent, setFormattedListsContent] = useState(Array.from({ length: listCount }, () => []));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [newList, setNewList] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  // Handle adding a new list
  const addList = () => {
    setListCount(listCount + 1);
    setListContents([...listContents, '']);
    setFormattedListsContent([...formattedListsContent, []])
  };

  // Handle deleting a list
  const handleDeleteList = (index) => {
    if (listCount > 2) {
      setListCount(listCount - 1);
      setListContents(listContents.filter((_, i) => i !== index));
      setFormattedListsContent(formattedListsContent.filter((_, i) => i !== index))
    }
  };

  // Handle resetting a list
  const handleResetList = (index) => {
    const updatedListContents = [...listContents];
    const updatedFormattedListsContent = [...formattedListsContent];

    updatedFormattedListsContent[index] = [];
    updatedListContents[index] = '';

    setListContents(updatedListContents);
    setFormattedListsContent(updatedFormattedListsContent);
  };

  // Handle changing the content of a list
  const handleListChange = (index, value) => {
    const updatedListContents = [...listContents];
    const updatedFormattedListsContent = [...formattedListsContent];

    updatedListContents[index] = value;
    updatedFormattedListsContent[index] = formatList(value);

    setListContents(updatedListContents);
    setFormattedListsContent(updatedFormattedListsContent);
  };

  const handleMergeLists = () => {
    const mergedResults = mergeLists(formattedListsContent);
    setNewList(formatArrayToString(mergedResults));
  };

  const copyToClipboard = () => {
    const textarea = document && document.querySelector('textarea[name="newList"]');
    textarea && textarea.select();
    document.execCommand('copy');
  };

  useEffect(() => {
    setIsButtonDisabled(!validateArrays(formattedListsContent));
  }, [listContents, formattedListsContent])

  return (
    <div className='tool container mx-auto max-w-screen-md p-10'>
      <h3 className='text-white underline cursor-pointer' onClick={() => setIsModalOpened(true)}>Instructions</h3>
      {listContents.map((content, index) => (
        <div className='tool-list' key={index}>
          <div className='tool-list-header mb-2 mt-4 flex justify-between'>
            <h2 className='tool-list-title text-white'>Deck {index + 1}</h2>
            <div>
              <FontAwesomeIcon className='tool-list-icon--reset text-white cursor-pointer' icon={faArrowRotateLeft} onClick={() => handleResetList(index)}/>
              {listCount > 2 && (
                <FontAwesomeIcon className='tool-list-icon--delete text-white cursor-pointer ml-2' icon={faTrash} onClick={() => handleDeleteList(index)}/>
              )}
            </div>
          </div>
          <textarea
            className='tool-list-text block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={content}
            onChange={(e) => handleListChange(index, e.target.value)}
            rows={4}
            cols={50}
          />
        </div>
      ))}
      <div className='mt-4'>
        <button className='button--animated mr-4' onClick={addList}>Add Deck</button>
        <button disabled={isButtonDisabled} className='button--animated mr-4' onClick={handleMergeLists}>Merge Decks</button>
      </div>
      {newList &&
        <div className='mt-6'>
          <h2 className='tool-list-title text-white mb-2'>You new deck:</h2>
          <textarea
            name="newList"
            readOnly
            className='tool-list-text block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={newList}
            rows={16}
            cols={50}
          />
          <button className='button--animated mt-4' onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      }
    <InstructionModal isOpen={isModalOpened} onClose={() => setIsModalOpened(false)} />
    </div>
  );
};

export default Tool;
