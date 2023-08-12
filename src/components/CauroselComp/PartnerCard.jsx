import React from 'react';
import {
	ImageContainer,
	Image,
	Partnerrapper,
} from './PartnerCardStyles';
import { useNavigate } from "react-router-dom";
import { ROUTE_COMMING_SOON } from '../../utils/Constants';


const PartnerCard = (props) => {

	const { pos, tag, obj } = props || {};

	const { image_url, title, navigation_link } = obj || {};

	let navigate = useNavigate();


	const onClick = (history) => {
		navigate(ROUTE_COMMING_SOON);

	}
	const redirectPage = (link) => {

		// React.useEffect(() => {
		// window.location.replace('https://www.google.com')
		window.open(link, '_blank');
	}





		return (
			<>
			{/* <TootTipContainerMain>clic me<TootTipContainerText>Anitha</TootTipContainerText>
			</TootTipContainerMain> */}
				<Partnerrapper key={pos + tag}  onClick={() => redirectPage(navigation_link)}>
				{/* <TootTipContainerMain>clic me */}
					<ImageContainer>
						<Image src={image_url} alt="" title={title}>

						</Image>
						{/* {hover? <TootTipContainer>{title}</TootTipContainer>: null} */}
					</ImageContainer>
					{/* Text<TootTipContainerText>{title}</TootTipContainerText> */}

					{/* </TootTipContainerMain> */}
				</Partnerrapper>
			</>

		);
	}



	export default PartnerCard;
