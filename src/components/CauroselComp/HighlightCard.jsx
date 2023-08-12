import React, { useState } from "react";
import {
  InsightGrid,
  InsightRight,
  InsightWrapper,
  Title,
  InsightLeft,
  Image,
  Description,
  Button,
  ImageHighlight,
} from "./HighlightStyles";
import { Btn } from "../GlobalStyles";
import "../HomeModule/ModuleGridStyles.css";
import QButton from "../../components/common/QButton";
import { logInfo } from "../../utils/QLogger";
import { redirectPage } from "../../utils/Navigation";
import LanguageChecker from "../../utils/LanguageChecker";

const HighLightCard = (props) => {
  const isEnglish = LanguageChecker();

  let keyName = isEnglish ? "" : "_my";

  const { data, pos, tag } = props || {};
  const { description, title, button_title, image, navigation_url, sub_title } =
    data || {};
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <InsightWrapper key={pos + tag + "Inner"}>
      <InsightGrid justify="space-between">
        <InsightLeft id="insightLeft">
          <Title>
            <b>{data[`title${keyName}`]}</b>
          </Title>
          <Description>{data[`sub_title${keyName}`]}</Description>

          <Title>
            <div style={{ marginTop: "2rem" }}></div>
            <QButton
              text={data[`button_title${keyName}`]}
              onClick={() => {
                redirectPage(data[`navigation_url${keyName}`]);
              }}
            ></QButton>
          </Title>
        </InsightLeft>
        <InsightRight>
          <ImageHighlight src={image} />
        </InsightRight>
      </InsightGrid>
    </InsightWrapper>
  );
};

export default HighLightCard;
