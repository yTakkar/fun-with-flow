// @flow

import * as React from 'react';

type Props = {
  city: string,
  country: string,
}

const Location = (props: Props) => {
  return (
    <div>
      <h3>LOCATION:</h3>
      <div>
        City: {props.city}
      </div>
      <div>
        Country: {props.country}
      </div>
    </div>
  )
}

export default Location