import React from "react";
import {
  FooterLogoHQ,
  SocialIcon,
  FooterAddress,
  FooterColumn,
  FooterMail,
  FooterLinkTitle,
} from "./FooterStyles";
import { Grid } from "@mui/material";
import LanguageChecker from "../../utils/LanguageChecker";
import QText from "../QText/QText";

const FooterLocation = ({ footerDetails }) => {
  const isEnglish = LanguageChecker();

  let keyName = isEnglish ? "" : "_my";

  return (
    <FooterColumn id="footerLogo">
      <FooterLinkTitle style={{ marginBottom: 0, marginTop: "1rem" }}>
        {footerDetails[`footer_header${keyName}`]}
      </FooterLinkTitle>
      {/* <FooterLinkTitle style={{ marginBottom: 10, maxWidth: "20rem" }}>{footerDetails[`footer_desc${keyName}`]}</FooterLinkTitle> */}

      <FooterLogoHQ to="/">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <SocialIcon src="assets/hq.jpg" />
          </Grid>
          {/* MUO */}
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <FooterAddress>
              <FooterAddress>
                {footerDetails[`footer_desc${keyName}`]}
              </FooterAddress>
              <FooterAddress style={{marginTop: "0px"}}
                dangerouslySetInnerHTML={{
                  __html: footerDetails[`footer_address${keyName}`],
                }}
              ></FooterAddress>

              <FooterAddress style={{marginTop: "5px"}}>
                {"TEL: " +
                  footerDetails.phone_number +
                  ", FAX: " +
                  footerDetails.fax_number}
              </FooterAddress>

              <FooterAddress style={{marginTop: "2px", marginBottom: '10px'}}>{footerDetails.footer_mail}</FooterAddress>
            </FooterAddress>
          </Grid>
        </Grid>
      </FooterLogoHQ>
    </FooterColumn>
  );
};

export default FooterLocation;
