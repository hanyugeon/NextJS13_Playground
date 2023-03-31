import { Skeleton, SkeletonContainer } from '@/ui/Skeleton'

export default function Loading() {
  return (
    <SkeletonContainer as={'section'}>
      <Skeleton as={'header'} width={'calc(100% - 2rem)'} height={'7.5rem'} />
      <Skeleton
        as={'article'}
        width={'calc(100% - 2rem)'}
        height={'calc(100% - 9.5rem)'}
      />
    </SkeletonContainer>
  )
}
