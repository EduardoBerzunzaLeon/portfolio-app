'use client';

import { IconGradient, IconGradientProps } from '../iconGradient/IconGradient';
import variables from '../../../styles/modules/variables.module.scss';

const gradients: IconGradientProps[] = [
  {
    id: 'primary_gradient',
    colorStart: variables.colorPrimaryDark,
    colorEnd: variables.colorPrimaryLight,
  },
  {
    id: 'secondary_gradient',
    colorStart: variables.colorSecondaryDark,
    colorEnd: variables.colorSecondaryLight,
  },
  {
    id: 'tertiary_gradient',
    colorStart: variables.colorTertiaryDark,
    colorEnd: variables.colorTertiaryLight,
  },
];

export const IconsGradientList = () => (
  <>
    {
        gradients.map((gradient) => (
          <IconGradient {...gradient} key={gradient.id} />
        ))
    }
  </>
);

export default IconsGradientList;
