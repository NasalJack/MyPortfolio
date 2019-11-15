import React from 'react'

const SidebarHider = (props) => {
  const { hiddenBar, toggleHide } = props
  return (
    <button onClick={toggleHide} className={hiddenBar ? 'Sidebar Revealer' : 'Sidebar Hider'}>
      {'<'}
    </button>
  )
}

export default SidebarHider
