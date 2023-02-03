import { NextPage } from 'next/types'
import CoffeeList from '@/components/CoffeeList';
import CoffeeItem from '@/components/CoffeeItem';

type COFFEE_TYPES = { title: string, isHottest: boolean }[]

const DUMMY_DATA: COFFEE_TYPES = [
  {title: "에스프레소", isHottest: true},
  {title: "아메리카노", isHottest: true},
  {title: "카페라떼", isHottest: true},
  {title: "카푸치노", isHottest: false},
  {title: "카페모카", isHottest: true},
  {title: "카라멜마키아토", isHottest: false},
  {title: "얼그레이", isHottest: true},
  {title: "페퍼민트", isHottest: true},
  {title: "루이보스", isHottest: false},
  {title: "레몬에이드", isHottest: true},
  {title: "자몽에이드", isHottest: true},
  {title: "아이스티", isHottest: false},
]

const Home: NextPage = () => {
  return(
    <CoffeeList>
      {DUMMY_DATA.map((data) =>
        <CoffeeItem
          key={data.title}
          title={data.title}
          isHottest={data.isHottest}
        />
      )}
    </CoffeeList>
  )
}

export default Home
