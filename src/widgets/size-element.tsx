import {ISize, ISizeLimit} from "../types";
import {ChangeEvent} from "react";
import {Badge} from "../components/ui/badge";
import {SIZE_UNIT} from "../constants";

interface ISizeElementProps {
  sizeProperty: { size: ISizeLimit; title: string; currentSize: ISize }
  name: 'width' | 'height' | 'depth'
  changeSizeCallback: (propertyName: string, propertyValue: number) => void
}

export const SizeElement = ({ sizeProperty, name, changeSizeCallback }: ISizeElementProps) => {

  const onChangeSizeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    changeSizeCallback(name, newValue)
  }

  return (
    <div>
      <p>{sizeProperty.title}</p>
      <div className="flex gap-3">
        <div className="w-[50px]">
          <Badge variant="secondary">{sizeProperty.currentSize[name] * SIZE_UNIT}</Badge>
        </div>

        <div>
          <input
            type="range"
            data-testid={`desk-size-${name}`}
            id={`desk-size-${name}`}
            onChange={onChangeSizeHandler}
            name={`desk-size-${name}`}
            value={sizeProperty.currentSize[name] * SIZE_UNIT}
            min={sizeProperty.size.min * SIZE_UNIT}
            max={sizeProperty.size.max * SIZE_UNIT}
            step="1"
          />
        </div>
      </div>
    </div>
  )
}
