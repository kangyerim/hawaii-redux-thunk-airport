import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { debounce } from 'throttle-debounce'
import axios from 'axios'
import {
    MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,
    MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter,
    MDBModal, MDBInput, MDBModalHeader, MDBModalBody
} from "mdbreact"

const MEMBER_CHANGER = "member/MEMBER_CHANGER"
const MEMBER_UPDATE = "member/MEMBER_UPDATE"
const memberChangerAction = data => ({type: MEMBER_CHANGER, payload: data})
const memberUpdateAction = data => ({type: MEMBER_UPDATE, payload: data})
export const memberChangerReducer = (state, action) =>{
    switch (action.type) {
        case MEMBER_CHANGER: return {}
        case MEMBER_UPDATE: return {}
        default: return state

    }
}
const memberUpdateThunk = data => dispatch => {
    axios.put("", data)
        .then()
        .catch()
}
const memberChangerThunk = data => dispatch => {
    axios.put("", data)
        .then()
        .catch()
}


export const MyPage = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [nameChanger, setNameChanger] = useState(false)
    const [regdate, setRegdate] = useState('')


    useEffect(()=>{

        setEmail(sessionStorage.getItem('email'))
        setName(sessionStorage.getItem('name'))
    })


    const onClickChanger = () => {

    }
    const onChangeUserNameUpdate = () => {
        setNameChanger()
    }
    const onClickUpdate = () => {

    }
    return <>
        <MDBContainer className="py-5">
            <MDBRow center>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">회원 정보</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="이메일"
                                        group
                                        type="email"
                                        icon="null"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={email}
                                    />
                                    <MDBInput
                                        label="닉네임 (변경 하려면 클릭)"
                                        group
                                        type="text"
                                        icon="null"
                                        validate
                                        error="wrong"
                                        success="right"
                                        value={sessionStorage.getItem('userName')}
                                        onClick={onClickChanger}
                                    />
                                    {nameChanger ?
                                        <div>
                                            <MDBInput
                                                label="변경할 닉네임"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                onChange={onChangeUserNameUpdate}
                                            />
                                            <MDBInput
                                                label="가입일"
                                                group
                                                type="text"
                                                icon="null"
                                                validate
                                                value={regdate.split('T')[0]}
                                            />
                                        </div> :
                                        <MDBInput
                                            label="가입일"
                                            group
                                            type="text"
                                            icon="null"
                                            validate
                                            value={regdate.split('T')[0]}
                                        />}
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="cyan"  onClick={onClickUpdate}>
                                        닉네임 변경
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    </>
}