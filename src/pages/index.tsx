import { Input } from 'antd';
import React, { useState } from 'react';

import styles from './index.less';

function genTitle(str: string) {
  let [head, tail] = [str.substr(0, str.length - 1), str.substr(-1)]
  if (str.length > 4) {
    [head, tail] = [str.substr(0, str.length - 2), str.substr(-2)]
  }
  return (
    <div style={{ backgroundColor: "black",fontSize:"36px",fontWeight:"bold",padding:"10px 1rem" }}>
      <span style={{color:"white"}}>{head}</span>
      <span style={{color:"black",backgroundColor:"orange",padding:"2px 5px",borderRadius:"3px"}}>{tail}</span>
    </div>
  );
}

export default () => {
  const [text, setText] = useState('正人君子');
  return (
    <div className={styles.block}>
      <Input
        type="text"
        defaultValue={text}
        size="large"
        onChange={e => setText(e.target.value)}
      />
      <p>
        {genTitle(text)}
      </p>
    </div>
  );
}
