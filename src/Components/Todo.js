import React from 'react';
import {List, ListItem,ListItemText   } from '@material-ui/core';

function Todo(props) {
    return (
        <List>
          <ListItem>
             <ListItemText primary={props.text} secondary="Seconda Text"/>
          </ListItem>
        </List>
    )
}

export default Todo
