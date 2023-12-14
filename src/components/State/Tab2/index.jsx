import React, { useState } from 'react';
import './index.css'

function Tab2(props) {
    const [tab, setTab] = useState(1);

    const onChangeTab = (currentTab) => () => {
        setTab(currentTab);
      };
    
      const content = () => {
        let content =  '';
        switch (tab) {
          case 1:
            content = 'Tab 1 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
            break;
          case 2:
            content = 'Tab 2 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
            break;
          case 3:
            content = 'Tab 3 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
            break;
          case 4:
            content = 'Tab 4 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
            break;
        
          default:
            content = '';
            break;
        }
    
        return content;
      }
    
    return (
        <>
             <div className='container'>
        <div className='wrapper d-flex justify-content-center'>
    
          <button className={`btn-tab ${tab === 1 ? 'active' : ''}`} onClick={onChangeTab(1)}>History</button>
          <button className={`btn-tab ${tab === 2 ? 'active' : ''}`} onClick={onChangeTab(2)}>Method</button>
          <button className={`btn-tab ${tab === 3 ? 'active' : ''}`} onClick={onChangeTab(3)}>Class</button>
          <button className={`btn-tab ${tab === 4 ? 'active' : ''}`} onClick={onChangeTab(4)}>Student</button>
        </div>

        <div className='wrapper'>
          <p>{content()}</p>
        </div>
      </div>
        </>
    );
}

export default Tab2;