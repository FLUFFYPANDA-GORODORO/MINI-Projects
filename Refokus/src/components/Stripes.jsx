import React from 'react'
import Stripe from "./Stripe"

function Stripes() {

    var data =[
        {url:"https://www.brandbucket.com/sites/default/files/logo_uploads/297592/large_idvo.png",number:48},
        {url:"https://www.brandbucket.com/sites/default/files/logo_uploads/60808/large_evady1.png",number:2},
        {url:"https://www.brandbucket.com/sites/default/files/logo_uploads/268949/large_revitalo.png",number:11},
        {url:"https://www.brandbucket.com/sites/default/files/logo_uploads/205949/large_vidavio.png",number:48},
        {url:"https://www.brandbucket.com/sites/default/files/logo_uploads/93754/large_carevito.png",number:2},
        {url:"https://www.brandbucket.com/sites/default/files/logo_uploads/212202/large_nuvocure.png",number:11}
    ]

  return (
    <div className='flex items-center mt-10 mb-16'>
      {data.map((elem,index) =>(
         <Stripe val={elem} />
      ))}
    </div>
  )
}

export default Stripes
