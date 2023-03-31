'use client'

import BREAKPOINTS from '@/styles/breakpoints'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const skeletonKeyframes = keyframes`
  0% {
    background-position: -20rem 0;
  }
  100% {
    background-position: calc(20rem + 100%) 0;
  }
`

export const SkeletonContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  max-height: 74.4rem;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 60rem;
    max-height: 55.8rem;
  }
`

export const Skeleton = styled.div<{ width: string; height: string }>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 0.8rem;
  margin: 1rem;
  animation: ${skeletonKeyframes} 2400ms infinite;
  background-color: #ffbfae;
  background-image: linear-gradient(270deg, #ffbfae, #ff7c58, #ffbfae);
  background-size: 20rem 100%;
  background-repeat: no-repeat;
`
