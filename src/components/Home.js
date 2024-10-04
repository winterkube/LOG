// src/Home.js
import React from 'react';
import './styles/Home.css'; // Import the stylesheet

// Import images
import logoImage from './images/log logo.png';
import constructImage from './images/construct.png';
import lockImage from './images/lock.png';
import blankImage from './images/blank.png';
import blackImage from './images/black.png';
import {ScrollRestoration} from "react-router-dom";

// // Import audio files
// import hitAudio from './sfx/hitsfx.mp3';
// import clockAudio from './sfx/clock.mp3';



function Home() {
    return (
        <div className="home">


            <h4>
                HOME
                 <br/>
                 </h4>

             <h1>Welcome!</h1>

             {/* UNDER CONSTRUCTION */}
            <div id="construct" style={{ textAlign: 'center' }}>
                    <img src={constructImage} alt="Under Construction" height={220}/>
            </div>

            <h6> <b> UNDER <br/> CONSTRUCTION </b> </h6>
            <ScrollRestoration />
        </div>
    );
}

export default Home;



//

//

//
// function Home() {
//     // const [count, setCount] = useState(0);
//     // const [ipAddress, setIpAddress] = useState('');
//     // const imgRef = useRef(null);
//     // const audioRef = useRef({
//     //     hit: new Audio(hitAudio),
//     //     clock: new Audio(clockAudio),
//     // });
//
//     return (
//         <div>
//             {/* NAV BAR */}
//             {/* Include NavBar component if available */}
//
//             {/* LOGO */}
//             <div id="logo" style={{ textAlign: 'center' }}>
//                 <img src={logoImage} alt="Logo" height={300} />
//             </div>
//
//             <h4>
//                 HOME
//                 <br />
//             </h4>
//
//             <h1>Welcome!</h1>
//
//             {/* UNDER CONSTRUCTION */}
//             <div style={{ textAlign: 'center' }}>
//                 <div id="construct">
//                     <img src={constructImage} alt="Under Construction" height={270} />
//                 </div>
//                 <h6>
//                     <b>
//                         UNDER <br /> CONSTRUCTION
//                     </b>
//                 </h6>
//             </div>
//
//             {/*/!* Blank Image *!/*/}
//             {/*<div id="black">*/}
//             {/*    <img*/}
//             {/*        id="blk"*/}
//             {/*        src={blankImage}*/}
//             {/*        alt="Blank"*/}
//             {/*        height={1}*/}
//             {/*        width={1}*/}
//             {/*        ref={imgRef}*/}
//             {/*    />*/}
//             {/*</div>*/}
//
//             {/*/!* Secret Button *!/*/}
//             {/*<div id="secret" onClick={secretFunc} style={{ cursor: 'pointer' }}>*/}
//             {/*    <img align="right" src={lockImage} alt="Lock" height={35} />*/}
//             {/*</div>*/}
//
//             {/*/!* IP Address Display *!/*/}
//             {/*{ipAddress && (*/}
//             {/*    <div style={{ textAlign: 'center' }}>*/}
//             {/*        <div id="ip">{`Your IP: ${ipAddress}`}</div>*/}
//             {/*        <div id="ip2">Careful.</div>*/}
//             {/*    </div>*/}
//             {/*)}*/}
//
//             <h3>
//                 <br />
//                 <br />
//                 <br />
//             </h3>
//         </div>
//     );
// }
//
// export default Home;
