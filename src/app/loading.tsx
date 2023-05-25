import { Skeleton, SkeletonContainer } from '@/ui/Skeleton'

export default function Loading() {
  return (
    <SkeletonContainer>
      <Skeleton as={'header'} width={'calc(100% - 1rem)'} height={'7.5rem'} />
      {[...Array(5)].map((v, i) => (
        <Skeleton
          key={i}
          as={'div'}
          width={'calc(100% - 1rem)'}
          height={'6.2rem'}
          style={{
            animationDelay: `${i * 0.05}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </SkeletonContainer>
  )
}
