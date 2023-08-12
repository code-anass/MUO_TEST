import React from 'react'
import { FormDiv, Label, Map, MapWrapper } from './MapComponentStyle'

export default function MapComponent({t}) {
      return (
            <FormDiv >
                  <Label >{t("ContactUs.location")}</Label>
                  <MapWrapper >
                        <Map
                              width="100%"
                              height={200}
                              src="https://maps.google.com/maps?q=Jabatan+Perancangan+Bandar+dan+Desa+putrajaya)&t=&z=17&ie=UTF8&iwloc=&output=embed"
                              frameBorder={0}
                              scrolling="no"
                              marginHeight={0}
                              marginWidth={0}

                        ></Map>
                  </MapWrapper>
            </FormDiv>
      )
}
