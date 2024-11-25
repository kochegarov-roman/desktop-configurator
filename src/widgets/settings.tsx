import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion'
import { DesktopSizeSettings } from './size-settings'
import { DesktopMaterials } from './desktop-materials'
import { PropsVariants } from './props-variants'
import { HoleVariants } from './hole-variants'

interface ISettingsProps {}

export const Settings = ({}: ISettingsProps) => {
  return (
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Maтериал верха</AccordionTrigger>
          <AccordionContent>
            <DesktopMaterials />
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
  )
}
