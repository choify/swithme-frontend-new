import React from 'react'

const StudyButton = (props: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="bg-lime-400 p-5 rounded-md text-semibold-20px text-neutral-800 border border-lime-500 hover:bg-green-500"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
export default StudyButton
