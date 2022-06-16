import React from 'react'
import ContextMenu from './ContextMenu'

export default function Sheet() {
  
   
  return (
        <>
        <div className='wrapper'>
        <div id='customContextmenuArea1' className='customContextmenuArea1' >
          <ContextMenu
            targetId='customContextmenuArea1'
            options={['View', 'Update', 'Delete']}
            classes={{
              listWrapper: 'customContextmenuArea1ListWrapper',
              listItem: 'customContextmenuArea1ListItem'
            }}    
        />
      </div></div>
        </>
  )
}
