import React from 'react'

import styled from 'styled-components/macro'

const StyledLoader = styled.div`
.container {
  position: relative;
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container span {
  display: inline-block;
  font-size: 3em;
  margin-left: 2vmin;
  color: var(--light-grey);
}

.container span:after {
  width: 2vmin;
  height: 2vmin;
  background-color: red;
}

.container span:nth-child(1) {
  animation: first 4s linear infinite;
}

.container span:nth-child(2) {
  animation: second 4s linear infinite;
}

.container span:nth-child(3) {
  animation: first 4s linear infinite;
}

.container span:nth-child(4) {
  animation: second 4s linear infinite;
}

@keyframes first {
  0%,15%,30%,45%,60%,75%,100% {
    transform: rotate(0deg) translateY(6vmin);
  }
  5%,20%,35%,50%,65%,80%,95% {
    transform: rotate(15deg) translateY(-6vmin);
  }
  10%,25%,40%,55%,70%,85%,90% {
    transform: rotate(-15deg) translateY(6vmin);
  }
}

@keyframes second {
  0%,15%,30%,45%,60%,75%,100% {
    transform: rotate(0deg) translateY(-6mvin);
  }
  5%,20%,35%,50%,65%,80%,95% {
    transform: rotate(15deg) translateY(6vmin);
  }
  10%,25%,40%,55%,70%,85%,90% {
    transform: rotate(-15deg) translateY(-6vmin);
  }
}
`

export default function Loader() {
  return (
    <StyledLoader>
      <div className="container">
        <span>♫</span>
        <span>♬</span>
        <span>♩</span>
        <span>♪</span>
      </div>
    </StyledLoader>
  )
}
