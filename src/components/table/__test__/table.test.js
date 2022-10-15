import React from 'react'
import { ReactDOM } from 'react-dom'
import {Table} from '../table'
import { render } from '@testing-library/react'


it("rentersTabel", () => {
    const div= document.createElement("div");
    expect(ReactDOM.render( <Table data={coins} handleRowClick={handleSelectCoin}/>,<div></div>)).toBeTruthy
})