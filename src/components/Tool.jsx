import React, { useEffect, useState } from 'react';

const Tool = () => {
  // Store the amount of lists (min 2)
  const [listCount, setListCount] = useState(2);
  // Store the content of each list
  const [listContents, setListContents] = useState(Array.from({ length: listCount }, () => ''));
  // Store formatted list
  const [parsedListsContent, setParsedListsContent] = useState(Array.from({ length: listCount }, () => ''));
  // Handle adding a new list
  const addList = () => {
    setListCount(listCount + 1);
    setListContents([...listContents, '']);
  };

  // Handle deleting a list
  const deleteList = (index) => {
    if (listCount > 2) {
      setListCount(listCount - 1);
      setListContents(listContents.filter((_, i) => i !== index));
    }
  };

  // Handle resetting a list
  const resetList = (index) => {
    const updatedListContents = [...listContents];
    updatedListContents[index] = '';
    setListContents(updatedListContents);
  };

  // Handle changing the content of a list
  const handleListChange = (index, value) => {
    const updatedListContents = [...listContents];
    const updatedParsedListsContent = [...parsedListsContent];

    updatedListContents[index] = value;
    updatedParsedListsContent[index] = parseList(value);
    setListContents(updatedListContents);
    setParsedListsContent(updatedParsedListsContent);
  };

  const parseList = (list) => {
  const lines = list.trim().split('\n');
  const objectList = [];

  for (const line of lines) {
    const [countStr, ...nameParts] = line.trim().split(' ');
    const count = parseInt(countStr, 10);
    const name = nameParts.join(' ');
    const itemObject = { count, name };
    objectList.push(itemObject);
  }

  return objectList;
}

  useEffect(() => {
    console.log('LISTS CHANGE:', listContents);
    console.log('LISTS CHANGE FORMATTED:', parsedListsContent);
  }, [listContents, parsedListsContent])

  return (
    <div className='tool container mx-auto max-w-screen-sm py-10'>
      {listContents.map((content, index) => (
        <div className='tool-list' key={index}>
          <div className='tool-list-header mb-2 mt-4 flex justify-between'>
            <h2 className='tool-list-title'>Deck {index + 1}</h2>
            <div>
              <button className='tool-list-reset mr-2 ml-2 text-xs' onClick={() => resetList(index)}>Reset</button>
              {listCount > 2 && (
                <button className='tool-list-delete text-xs' onClick={() => deleteList(index)}>Delete</button>
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
      <button className='button--animated mt-4' onClick={addList}>Add List</button>
    </div>
  );
};

export default Tool;
