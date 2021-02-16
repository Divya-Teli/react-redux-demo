import React, { Component } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';


createTheme('solarized', {
  text: {
    // primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#bfd2da',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    // default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});


const columns = [
  {
    name: 'UserID',
    selector: 'userId',
    compact:true,
    center:true,
  },
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Title',
    selector: 'title',
    wrap:true
  },
  {
    name: 'Description',
    selector: 'body',
    wrap:true
  }
];

class Table extends Component {
    constructor(props) {
        super(props)
    }
    
  render() {
    return (
      <DataTable
        title="Posts"
        columns={columns}
        data={this.props.data}
        theme="solarized"
        pagination={true}
        paginationPerPage={5}
      />
    )
  }
};

export default Table;