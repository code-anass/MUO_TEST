import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";
import { Grid } from "@mui/material";
import "./DashboardStyles.css";
import MapBg from "./MapBg";
import { logError, logInfo } from "../../utils/QLogger";
import "./maps.css";

const MapComponent = (state) => {

  const { commonDetails } = state
  const map1Ref = useRef(null);
  const map2Ref = useRef(null);
  const map3Ref = useRef(null);

  useEffect(() => {
    let view1, view2, view3;

    loadModules(
      [
        "esri/core/urlUtils",
        "esri/config",
        "esri/Map",
        "esri/layers/FeatureLayer",
        "esri/views/MapView",
        "esri/core/watchUtils",
        "esri/widgets/Legend",
        "esri/widgets/BasemapGallery",
        "esri/widgets/Expand",
        "esri/geometry/Point",
        "esri/widgets/Home",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/widgets/LayerList",
        "esri/symbols/SimpleFillSymbol",
        "esri/layers/MapImageLayer",
      ],
      { css: true }
    ).then(
      ([
        urlUtils,
        esriConfig,
        Map,
        FeatureLayer,
        MapView,
        watchUtils,
        Legend,
      ]) => {
        esriConfig.request.proxyUrl = "/proxy/PHP/proxy.php";

        const proxyUrl = "/proxy/PHP/proxy.php?";

        const urlsys = window.location.hostname;
        const getUrl = window.location;
        const namaSistem = "/urban_observatory";
        logInfo(commonDetails, "Map Page")

        const domainUrl = "https://www.map2uspace.com.my/";

        urlUtils.addProxyRule({
          urlPrefix: domainUrl,
          proxyUrl: "/proxy/PHP/proxy.php?",
        });

        const map1 = new Map({
          basemap: "streets",
        });

        const map2 = new Map({
          basemap: "streets",
        });

        const map3 = new Map({
          basemap: "streets",
        });

        view1 = new MapView({
          container: map1Ref.current,
          center: [102.474798, 3.749791],
          zoom: 7,
          map: map1,
          highlightOptions: {
            color: "red",
          },
          extent: {
            xmin: 1.1222302545200001e7,
            ymin: 289137.3669000007,
            xmax: 1.13499798792e7,
            ymax: 430870.6154999994,
            spatialReference: 102100,
          },
        });

        view2 = new MapView({
          container: map2Ref.current,
          center: [102.474798, 3.749791],
          zoom: 7,
          map: map2,
          highlightOptions: {
            color: "red",
          },
          extent: {
            xmin: 1.11520586164e7,
            ymin: 570969.3841000013,
            xmax: 1.1193011399500001e7,
            ymax: 622394.7886999995,
            spatialReference: 102100,
          },
        });

        view3 = new MapView({
          container: map3Ref.current,
          center: [102.474798, 3.749791],
          zoom: 7,
          map: map3,
          highlightOptions: {
            color: "red",
          },
          extent: {
            xmin: 1.1322463502999999e7,
            ymin: 266245.1671000011,
            xmax: 1.1432500725900002e7,
            ymax: 352665.05000000075,
            spatialReference: 102100,
          },
        });

        const layer1 = new FeatureLayer({
          url: commonDetails.dashboard_map_1,
          title: "Rebakan Bandar",
          maxScale: 50000, // Set the maximum scale here
        });

        const layer2 = new FeatureLayer({
          url: commonDetails.dashboard_map_2,
          title: "Rebakan Bandar",
          maxScale: 50000, // Set the maximum scale here
        });

        const layer3 = new FeatureLayer({
          url: commonDetails.dashboard_map_3,
          title: "Rebakan Bandar",
          maxScale: 50000, // Set the maximum scale here
        });

        map1.add(layer1);
        map2.add(layer2);
        map3.add(layer3);

        try {
          watchUtils.watch(view1, "zoom", function (zoom) {
            view2.zoom = zoom;
            view3.zoom = zoom;
          });

          watchUtils.watch(view2, "zoom", function (zoom) {
            view1.zoom = zoom;
            view3.zoom = zoom;
          });

          watchUtils.watch(view3, "zoom", function (zoom) {
            view1.zoom = zoom;
            view2.zoom = zoom;
          });

          // Loading Indicator
          // Map 1
          watchUtils.whenTrue(view1, "updating", function (evt) {
            let elemtPb1 = document.getElementById("progressBar1");
            if (elemtPb1) {
              elemtPb1.style.display = "block";
            }
          });
          watchUtils.whenFalse(view1, "updating", function (evt) {
            let elemtPb1 = document.getElementById("progressBar1");
            if (elemtPb1) {
              elemtPb1.style.display = "none";
            }
          });

          // Map 2
          watchUtils.whenTrue(view2, "updating", function (evt) {
            let elemtPb2 = document.getElementById("progressBar2");
            if (elemtPb2) {
              elemtPb2.style.display = "block";
            }
          });
          watchUtils.whenFalse(view2, "updating", function (evt) {
            let elemtPb2 = document.getElementById("progressBar2");
            if (elemtPb2) {
              elemtPb2.style.display = "none";
            }
          });

          // Map 3
          watchUtils.whenTrue(view3, "updating", function (evt) {
            let elemtPb3 = document.getElementById("progressBar3");
            if (elemtPb3) {
              elemtPb3.style.display = "block";
            }
          });
          watchUtils.whenFalse(view3, "updating", function (evt) {
            let elemtPb3 = document.getElementById("progressBar3");
            if (elemtPb3) {
              elemtPb3.style.display = "none";
            }
          });
        } catch (e) {
          logError("Unable to update the progress", e);
        }
      }
    );

    // return () => {
    //   if (view1) {
    //     view1.destroy();
    //   }
    //   if (view2) {
    //     view2.destroy();
    //   }
    //   if (view3) {
    //     view3.destroy();
    //   }
    // };
  }, []);

  return (
    <div className="rowD" key={state.key}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <MapBg title="SELANGOR" id="negeriPilih1" progressId="progressBar1">
            <div ref={map1Ref} id="map1" style={{ height: "400px" }}></div>
          </MapBg>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <MapBg title="P.PINANG" id="negeriPilih2" progressId="progressBar2">
            <div ref={map2Ref} id="map2" style={{ height: "400px" }}></div>
          </MapBg>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <MapBg title="N.SEMBILAN" id="negeriPilih3" progressId="progressBar3">
            <div ref={map3Ref} id="map3" style={{ height: "400px" }}></div>
          </MapBg>
        </Grid>
      </Grid>
    </div>
  );
};

export default MapComponent;
