import React from "react";
import "./DashboardStyles.css";
import QText from "../QText/QText";
import "./maps.css";

const MapBg = (props) => {
  return (


//     <div className="row">
//   <div className="col-md-4">
//     <div className="block block-rounded">
//       <div className="block-header block-header-default">
//         <h3 className="block-title" id="negeriPilih1">
//           SELANGOR
//         </h3>
//       </div>
//       <div className="block-content">
//         <div
//           id="map1"
//           style={{ width: "100%", height: 450 }}
//           className="esri-view esri-view-height-xsmall esri-view-height-less-than-small esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge esri-view-width-xsmall esri-view-width-less-than-small esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge esri-view-orientation-landscape"
//         >
//           <div className="esri-view-root">
//             <div
//               className="esri-view-surface esri-view-surface--touch-none"
//               role="application"
//               tabIndex={0}
//               data-interacting="false"
//             >
//               <canvas
//                 style={{ width: 524, height: 450, display: "block" }}
//                 width={1048}
//                 height={900}
//               />
//             </div>
//             <div className="esri-overlay-surface">
//               <div style={{ visibility: "hidden" }} />
//             </div>
//             <div className="esri-ui calcite-theme-dark" style={{ inset: 0 }}>
//               <div
//                 className="esri-ui-inner-container esri-ui-corner-container"
//                 style={{ inset: "15px 15px 30px" }}
//               >
//                 <div className="esri-ui-top-left esri-ui-corner">
//                   <div className="esri-component esri-zoom esri-widget">
//                     <div
//                       className="esri-widget--button esri-widget esri-interactive"
//                       role="button"
//                       tabIndex={0}
//                       title="Zoom in"
//                     >
//                       <span
//                         aria-hidden="true"
//                         role="presentation"
//                         className="esri-icon esri-icon-plus"
//                       />
//                       <span className="esri-icon-font-fallback-text">
//                         Zoom in
//                       </span>
//                     </div>
//                     <div
//                       className="esri-widget--button esri-widget esri-interactive"
//                       role="button"
//                       tabIndex={0}
//                       title="Zoom out"
//                     >
//                       <span
//                         aria-hidden="true"
//                         role="presentation"
//                         className="esri-icon esri-icon-minus"
//                       />
//                       <span className="esri-icon-font-fallback-text">
//                         Zoom out
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="esri-ui-top-right esri-ui-corner" />
//                 <div className="esri-ui-bottom-left esri-ui-corner" />
//                 <div className="esri-ui-bottom-right esri-ui-corner" />
//               </div>
//               <div className="esri-ui-inner-container esri-ui-manual-container">
//                 <div className="esri-component esri-attribution esri-widget">
//                   <div
//                     className="esri-attribution__sources esri-interactive"
//                     tabIndex={0}
//                     role="button"
//                   >
//                     Esri, HERE, Garmin, NGA, USGS
//                   </div>
//                   <div className="esri-attribution__powered-by">
//                     Powered by{" "}
//                     <a
//                       className="esri-attribution__link"
//                       href="http://www.esri.com/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Esri
//                     </a>
//                   </div>
//                 </div>
//                 <div className="esri-component" style={{ display: "none" }} />
//                 <div className="esri-component" style={{ display: "none" }} />
//               </div>
//             </div>
//           </div>
//           <div className="esri-view-user-storage" />
//         </div>
//       </div>
//       <div className="block-content bg-body-light">
//         <div id="progressBar1" style={{ display: "none" }}>
//           <div className="progress push" style={{ height: 10 }}>
//             <div
//               className="progress-bar progress-bar-striped progress-bar-animated bg-success"
//               role="progressbar"
//               style={{ width: "100%" }}
//               aria-valuenow={100}
//               aria-valuemin={0}
//               aria-valuemax={100}
//             />
//           </div>
//         </div>
//         <div
//           className="row text-left"
//           style={{ maxHeight: 180, overflow: "scroll", overflowX: "hidden" }}
//         >
//           {/* <p id="text1">Faktor utama yang menyumbang kepada kawasan bandar di Selangor termasuk harga tanah yang tinggi di teras bandar, ketersediaan tanah yang agak murah di pinggir bandar KL, kualiti alam semula jadi yang tinggi, harga rumah mampu milik dan kos sara hidup yang lebih rendah. Oleh itu, pendekatan baharu kepada pembangunan seperti kebolehdiaman, keterjangkauan, daya tahan dan kehijauan telah dilaksanakan ke arah pembangunan mampan. <br/><br/>Pertumbuhan pembangunan tanah bandar baharu di luar sempadan pusat bandar sedia ada telah membawa kepada pertumbuhan bandar baharu di pinggir bandar yang memenuhi keperluan komuniti baharu.<br/><br/>Rancangan Struktur Negeri Selangor 2035 mencadangkan konsep wilayah bandar untuk Selangor . Wilayah bandar ialah kawasan sekitar bandar di mana bandar itu mempunyai pengaruh yang dominan berhubung dengan bandar-bandar jiran lain yang mempunyai kepentingan yang sama.</p> */}
//         </div>
//       </div>
//     </div>
//   </div>

// </div>



    <div className="block block-rounded">
      <div className="block-header block-header-default">
         <QText type="h3" style={{marginBottom: "0px"}}> {props.title}</QText>
      </div>
      <div className="block-content">{props.children}</div>
      <div className="block-content bg-body-light">
        <div id={props.progressId} style={{ display: "none" }}>
          <div className="progress push" style={{ height: 10 }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default MapBg;
