import React from "react";
import Marque from "./Marque";

function Marques() {
  var images = [
    [
      "https://www.brandbucket.com/sites/default/files/logo_uploads/297592/large_idvo.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/60808/large_evady1.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/268949/large_revitalo.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/205949/large_vidavio.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/93754/large_carevito.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/212202/large_nuvocure.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/297592/large_idvo.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/60808/large_evady1.png",
    ],
    [
      "https://www.brandbucket.com/sites/default/files/logo_uploads/297592/large_idvo.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/60808/large_evady1.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/268949/large_revitalo.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/205949/large_vidavio.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/93754/large_carevito.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/212202/large_nuvocure.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/297592/large_idvo.png",
      "https://www.brandbucket.com/sites/default/files/logo_uploads/60808/large_evady1.png",
    ],
  ];

  return (
    <div className="py-10">
        {images.map((item,index)=> <Marque imagesurls={item} direction={index === 1 ? "left" : "right" }/>)}
        
    </div>
  );
}

export default Marques;
