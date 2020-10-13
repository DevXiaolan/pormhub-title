import { Col, Input, Row } from 'antd';
import React, { useState } from 'react';

import styles from './index.less';

function genTitle(head: string, tail: string) {

  return (
    <div style={{ backgroundColor: "black", fontSize: "36px", fontWeight: "bold", padding: "10px 1rem" }}>
      <span style={{ color: "white" }}>{head}</span>
      <span style={{ color: "black", backgroundColor: "orange", padding: "2px 5px", borderRadius: "3px" }}>{tail}</span>
    </div>
  );
}

export default () => {
  const [head, setHead] = useState('正人');
  const [tail, setTail] = useState('君子');
  return (
    <div className={styles.block}>
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={5}>
            <Input
              type="text"
              defaultValue={head}
              size="large"
              onChange={e => setHead(e.target.value)}
            />
          </Col>
          <Col span={5}>
            <Input
              type="text"
              defaultValue={tail}
              size="large"
              onChange={e => setTail(e.target.value)}
            />
          </Col>
        </Row>
      </Input.Group>
      <p style={{marginTop:"10px"}}>
        {genTitle(head, tail)}
      </p>
    </div>
  );
}
