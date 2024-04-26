'use client'

import { HexColorPicker } from 'react-colorful'

export const SwatchesPicker = ({ color, onChange, presetColors }) => {
  return (
    <div className='picker'>
      <HexColorPicker color={color} onChange={onChange} />

      <div className='picker__swatches'>
        {
          presetColors.map((presetColor) => (
            <button
              key={presetColor}
              className='picker__swatch'
              style={{ background: presetColor }}
              onClick={() => onChange(presetColor)}
            />
          ))
        }
      </div>
    </div>
  )
}
