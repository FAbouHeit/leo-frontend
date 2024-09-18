'use client';
import JoditComponent from '@/components/JoditComponent';
import React, { useState } from 'react'

export default function page() {
    const [content, setContent] = useState('');

    const handleEditorChange = (newContent) => {
      setContent(newContent);
    };
  
    return (
      <div>
        <JoditComponent value={content} onChange={handleEditorChange} />
      </div>
    );
}
