import React from 'react';

export default function Quote({quote}) {
  return      (<>
                <p>{quote.text}</p>
                <span>-{quote.author}</span>
                </>)
  ;
}
