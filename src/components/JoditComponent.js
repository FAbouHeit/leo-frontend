"use client";
import JoditEditor from "jodit-react";
import React, { useMemo } from "react";

const JoditComponent = ({ value, onChange }) => {
  // const options = [
  //   "bold",
  //   "italic",
  //   "|",
  //   "ul",
  //   "ol",
  //   "|",
  //   "font",
  //   "fontsize",
  //   "brush",
  //   "|",
  //   "outdent",
  //   "indent",
  //   "align",
  //   "|",
  //   "hr",
  //   "|",
  //   "table",
  //   "link",
  //   "|",
  //   "undo",
  //   "redo",
  //   "|",
  //   "fullsize"
  // ];

  const options = [
    'source', '|',
    'bold',
    'strikethrough',
    'underline',
    'italic', '|',
    'ul',
    'ol', '|',
    'outdent', 'indent',  '|',
    'font',
    'fontsize',
    'brush',
    'paragraph', '|',
    'image',
    'video',
    'table',
    'link', '|',
    'align', 'undo', 'redo', '|',
    'hr',
    'eraser',
    'copyformat', '|',
    'symbol',
    'fullsize',
    'print',
    'about'
  ]

  const config = useMemo(
    () => ({
      readonly: false,
      activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about', 'dots'],
      placeholder: "",
      saveModeInCookie: false,
      spellcheck: true,
      theme: "default",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      enter: "p",
      buttons: options,
      buttonsMD: options,
      buttonsSM: options,
      buttonsXS: options,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: true,
    }),
    []
  );

  return (
    <JoditEditor
      value={value}
      config={config}
      tabIndex={1} // Optional, can be adjusted as needed
      onChange={onChange}
    />
    
  );
};

export default JoditComponent;
