// CommentList.js
import React from "react";
import {ProgressBar, Label} from 'react-bootstrap';

const LanguagesList = function(languages) {

  return (
    <ul>
    {languages.languages.map(function(lang, index){
      return (<li key={ index } >
            <Label bsStyle="primary">{lang.language}</Label><ProgressBar now={lang.capacity} label={`${lang.capacity}%`} />
          </li>);
    })}
    </ul>
  );

}

export default LanguagesList;