import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from '../../assets/meal.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // window.location.href = "/home"
        // window.location.href = "/"

        navigate("/home")

    }
    return (
        <LoginContainer>
            <FormContainer>
                <StyledImg src={mealSvg} />

                <Header>{"<Clarusway/>"} Recipe</Header>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput type="text" placeholder='Username' required />
                    <StyledInput type="password" placeholder='Password' required />
                    <StyledButton type='submit' >Login</StyledButton>

                </StyledForm>
            </FormContainer>
        </LoginContainer>

    )
}

export default Login
