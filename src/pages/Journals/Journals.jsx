import React, { useState } from 'react';

const JournalsPage = () => {
  // Example journal entries
  const [entries] = useState([
    {
      id: 1,
      title: 'The Adventures of Space Explorers',
      description: 'Join the Space Explorers as they travel through the galaxy to discover new planets and make exciting new friends!',
      content: 'Long ago in a galaxy far away, the Space Explorers embarked on their greatest adventure yet...',
    },
    {
      id: 2,
      title: 'The Magical Forest',
      description: 'Follow a young girl as she discovers a magical forest where talking animals and mystical creatures live.',
      content: 'In the heart of the forest, there is a tree so old that no one remembers when it was planted...',
    },
    {
      id: 3,
      title: 'The Secret of the Ocean',
      description: 'Dive deep into the ocean with brave kids who explore the secrets hidden beneath the waves.',
      content: 'Beneath the surface of the calm ocean lies a world full of wonders and mysteries that no one has ever seen...',
    },
  ]);

  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleReadMore = (id) => {
    const entry = entries.find((entry) => entry.id === id);
    setSelectedEntry(entry);
  };

  const handleBack = () => {
    setSelectedEntry(null);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 min-h-screen">
      {/* Main Journal Container */}
      {selectedEntry ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto animate__animated animate__fadeIn">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
            onClick={handleBack}
          >
            Back to Journals
          </button>
          <h2 className="text-3xl font-bold text-gray-800 mt-6">{selectedEntry.title}</h2>
          <p className="text-lg text-gray-700 mt-4">{selectedEntry.content}</p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold overflow-y-hidden text-center text-white mb-8 animate__animated animate__fadeIn">
            Kid's Knowledge Journals
          </h1>
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn">
              <h2 className="text-2xl font-semibold text-gray-800">{entry.title}</h2>
              <p className="text-gray-600 mt-2">{entry.description}</p>
              <button
                onClick={() => handleReadMore(entry.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalsPage;
