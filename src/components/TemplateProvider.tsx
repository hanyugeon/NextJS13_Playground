import { NavigationTemplate, StyleTemplate } from '@/ui/Template'

type ChildrenType = {
  children: React.ReactNode
}

const TemplateProvider = ({ children }: ChildrenType) => {
  return (
    <>
      <NavigationTemplate />
      <StyleTemplate>{children}</StyleTemplate>
    </>
  )
}

export default TemplateProvider
