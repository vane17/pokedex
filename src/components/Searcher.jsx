import React from 'react';
import {Input} from 'antd';

const Searcher = () => {
  return (
    <Input.Search placeholder="Buscar..." style={{marginBottom: 10}}/>
  )
}

export {Searcher}