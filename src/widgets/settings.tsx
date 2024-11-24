import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion'
import { DesktopSizeSettings } from './size-settings'
import { DeskTopMaterials } from './materials'
import { PropsVariants } from './props-variants'
import { HoleVariants } from './hole-variants'

interface ISettingsProps {}

export const Settings = ({}: ISettingsProps) => {
  return (
    <div className="w-full md:w-[400px] md:min-w-[400px]">
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
            <DesktopSizeSettings />
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
            <HoleVariants />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
