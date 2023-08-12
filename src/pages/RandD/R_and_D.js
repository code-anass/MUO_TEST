import React from "react";
import { useState, useEffect, useRef } from 'react';
import { fetchLogin, fetchR_AND_DDetails, fetchAccessRequest } from "../../redux/actions/R_and_D_Actions";
import { connect, useDispatch } from 'react-redux';
import { logInfo } from "../../utils/QLogger";
import { isDataAvailable } from "../../utils/OperationUtils";
import LanguageChecker from "../../utils/LanguageChecker";
import { RandDData } from "./RandD_Data";
import { Main, MainContainer, SubMainContainer, FormInput, FormContainer, Overlay, FormContent,  MainTable, ActionButton, TableTh, TableTd, ContentCard } from "./RandD_Styles"


const RandD = (state) => {

    const dispatch = useDispatch();
    const isEnglish = LanguageChecker();
    const [counter, setCounter] = useState(-1);
    const [data, setData] = useState(RandDData);
    const [isOpen, SetIsOpen] = useState(false);
    const [rowData, SetRowData] = useState("");
    const [name,SetName] = useState("");
    const [email,SetEmail] = useState("");
    const [rowDomain, SetRowDomain] = useState("");

    var i = 1;

    function setOpen(data,domain) {
        SetRowData(data);
        SetRowDomain(domain);
        SetIsOpen(true);
    }
    
    function handleCancel() {
        SetEmail('');
        SetName('');
        SetIsOpen(false);
    }

    const handleNameChange = (event) =>{
        SetName(event.target.value);
    }

    const handleEmailChange = (event) =>{
        SetEmail(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let obj={"input":{
            "name":name,
            "email":email,
            "entity":rowData,
            "domain":rowDomain
        }}
        dispatch(fetchAccessRequest(obj));
        logInfo(name,email,rowData,rowDomain,"name and Email and Entity");
        SetEmail('');
        SetName('');
        SetIsOpen(false);

    }


    

    useEffect(() => {

        logInfo(state.randDDetails,"R&D Page");
        
        if (isDataAvailable(state.randDDetails)) {
            //bindResponseToUI(state.randDDetails);
            logInfo(state.randDDetails, "R & D Page");
            setData(state.randDDetails);
        }
        else {
            setData(RandDData);
        }
    }, [state.randDDetails]);

    useEffect(() => {
        if (counter <= 0) {
            setCounter(counter => counter + 1);
        }
        if (counter === 1) {
            setCounter(counter => counter + 1);
            //dispatch(fetchR_AND_DDetails());
            dispatch(fetchLogin());
        }

    }, [counter]);


    return (
        <Main>
            <MainContainer>
                    <ContentCard>
                        <MainTable>
                            <tr>
                                <TableTh style={{ width: '10%' }}>SR. NO</TableTh>
                                <TableTh style={{ width: "60%" }}>Entity Type</TableTh>
                                <TableTh style={{ width: "30%" }}>Action</TableTh>
                            </tr>
                            {data.map((element) => (
                                <tr>
                                    <TableTd>{i++}</TableTd>
                                    <TableTd>{element.entityname}</TableTd>
                                    <TableTd><ActionButton onClick={() => setOpen(element.entityname,element.domain)}>Access</ActionButton></TableTd>
                                </tr>
                            ))}
                        </MainTable> 
                        {isOpen && (
                            <Overlay>
                                <FormContainer> 
                                    <FormContent>
                                        <form onSubmit={handleSubmit}>
                                            <label>
                                                Name : 
                                                <FormInput type="text" value={name} onChange={handleNameChange} />
                                            </label>
                                            <br/>
                                            <label>
                                                Email : 
                                                <FormInput type="text" value={email} onChange={handleEmailChange} />
                                            </label>
                                            <br/>
                                            <ActionButton type="submit">Submit</ActionButton>
                                            <ActionButton type="button" onClick={() => handleCancel()}>Cancel</ActionButton>
                                        </form>
                                    </FormContent>
                                </FormContainer>
                            </Overlay>
                        )}
                    </ContentCard>
            </MainContainer>
        </Main>
    )


}


const mapStateToProps = (state) => ({
    errorResponse: state.notification,
    randDDetails: state.randDDetails,
});



export default connect(mapStateToProps)(RandD);