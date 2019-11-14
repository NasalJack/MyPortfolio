import React from 'react'

const SidebarHider = (props) => {
  const { hiddenBar, toggleHide } = props
  return (
    <button onClick={toggleHide} className={hiddenBar ? 'Sidebar Revealer' : 'Sidebar Hider'}>
      {hiddenBar ? '>' : '<'}
    </button>
  )
}

export default SidebarHider
