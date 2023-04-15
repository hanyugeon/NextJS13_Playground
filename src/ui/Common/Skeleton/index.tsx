'use client'

import BREAKPOINTS from '@/styles/breakpoints'
import { COLOR } from '@/styles/colors'
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

export const SkeletonContainer = styled.div`
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
  margin: 0.5rem;
  animation: ${skeletonKeyframes} 2400ms infinite;
  animation-duration: 1s;
  background-color: ${`${COLOR.brand3}`};
  background-image: linear-gradient(
    270deg,
    ${`${COLOR.brand3}`},
    ${`${COLOR.brand2}`},
    ${`${COLOR.brand3}`}
  );
  background-size: 20rem 100%;
  background-repeat: no-repeat;
`
