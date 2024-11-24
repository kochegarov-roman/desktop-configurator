import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion'
import { DeskSizeSettings } from './desk-size'
import { DeskTopMaterials } from './materials'
import { PropsVariants } from './props-variants'

interface ISettingsProps {}

export const Settings = ({}: ISettingsProps) => {
  return (
    <div className="flex-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Maтериал верха</AccordionTrigger>
          <AccordionContent>
            <DeskTopMaterials />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Размеры</AccordionTrigger>
          <AccordionContent>
            <DeskSizeSettings />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Опоры</AccordionTrigger>
          <AccordionContent>
            <PropsVariants />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Отверстие для кабеля</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
